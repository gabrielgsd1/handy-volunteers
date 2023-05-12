import { api } from "@/services/apiService";
import { GetServerSideProps } from "next";
import React, { useContext, useState } from "react";
import LoggedLayout from "../_loggedInLayout";
import { Post } from "@/interfaces/interfaces";
import moment from "moment";
import Button from "@/components/Buttons";
import Link from "next/link";
import { UserContext } from "@/contexts/UserContext";
import { messageError, messageSuccess } from "@/components/Message";
import { useRouter } from "next/router";

interface PostProps {
  post: Post;
}

function Post({ post }: PostProps) {
  const hasAssistant = Boolean(post.AssistantId);
  const [loading, setLoading] = useState(false);
  const userCtx = useContext(UserContext);
  const router = useRouter();

  async function assignJob() {
    try {
      setLoading(true);
      if (!userCtx?.user?.Assistant) {
        messageError("Você não possui um assistente em sua conta!");
        return;
      }
      const { data } = await api.post("/posts/assign-to-assistant", {
        postId: post.PostId,
        assistantId: userCtx.user.Assistant.AssistantId,
      });
      if (data) messageSuccess("Aplicado com sucesso");
      router.reload();
    } catch (e: any) {
      messageError(
        e?.response?.data?.message || "Erro ao se cadastrar para trabalho"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <LoggedLayout>
      <main className="px-8">
        <p className="text-2xl lg:text-3xl my-3 font-semibold green-gradient">
          Post de ID {post.PostId}
        </p>
        {hasAssistant ? (
          <p className="text-custom-red text-xl">
            Este trabalho não aceita mais aplicações
          </p>
        ) : (
          <div className="flex gap-6 items-center">
            <p className="text-custom-green text-xl">
              Este trabalho aceita aplicações
            </p>
          </div>
        )}
        <p className="py-2 text-lg">
          ONG:{" "}
          <Link className="hover:underline" href={"/ong/" + post.OngId}>
            {post.Ong?.OngName}
          </Link>
        </p>
        <p className="py-2 text-lg">Tipo de trabalho: {post.JobType?.Name}</p>
        <p className="py-2 text-lg">
          Possui assistente: {post.AssistantId ? "Sim" : "Não"}
        </p>
        {post.Assistant && (
          <>
            <p className="py-2 text-lg">
              Tarefa finalizada: {post.FinishedAt ? "Sim" : "Não"}
            </p>
            <p className="py-2 text-lg">
              Tarefa foi ocupada em:{" "}
              {moment(post.AssignedAt).format("DD/MM/YYYY - HH:mm")}
            </p>
          </>
        )}
        <div className="post py-4">
          <p className="title text-lg font-semibold lg:text-2xl">
            {post.Title}
          </p>
          <p>
            Postado em {moment(post.CreatedAt).format("DD/MM/YYYY - HH:mm")}
          </p>
          <p className="text-md lg:text-lg my-4">
            <pre className="font-[inherit]">{post.Content}</pre>
          </p>
        </div>
        {!hasAssistant && (
          <Button onClick={assignJob} loading={loading}>
            Aplicar para trabalho
          </Button>
        )}
      </main>
    </LoggedLayout>
  );
}

export default Post;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const post_id = ctx.params?.post_id;

  const post = await api.get<Post>(`/posts/${post_id}`);

  console.log(post.data);

  return {
    props: {
      post: post.data,
    },
  };
};