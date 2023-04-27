import { api } from "@/services/apiService";
import { GetServerSideProps } from "next";
import React from "react";
import LoggedLayout from "../_loggedInLayout";
import { Post } from "@/interfaces/interfaces";
import moment from "moment";
import Button from "@/components/Buttons";
import Link from "next/link";

interface PostProps {
  post: Post;
}

function Post({ post }: PostProps) {
  const hasAssistant = Boolean(post.AssistantId);

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus veniam itaque cum aliquam aliquid officia commodi nihil
            explicabo libero. Harum nam aspernatur velit sequi distinctio,
            aliquid dolores incidunt iusto ad sunt quos, deserunt corrupti id.
            Aliquam fugiat laboriosam quasi, repellat ut voluptas molestias
            culpa. Nisi voluptate exercitationem distinctio ullam unde quis
            aperiam magnam placeat officia, dolorum dolore repudiandae accusamus
            nobis nemo? Rerum officia ullam distinctio aut quisquam, quia omnis
            nulla laudantium eius aliquam! Temporibus dolor, ipsum placeat
            dolore, repellendus doloribus sint architecto culpa eos repellat
            quaerat quos ullam libero mollitia deleniti facilis. Odio mollitia
            saepe minima eligendi a possimus eius?
            {post.Content}
          </p>
        </div>
        {!hasAssistant && <Button>Aplicar para trabalho</Button>}
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
