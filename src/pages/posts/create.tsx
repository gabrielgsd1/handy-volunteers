import React, { useContext, useState } from "react";
import LoggedLayout from "../_loggedInLayout";
import Input from "@/components/Inputs/Input";
import Textarea from "@/components/Inputs/Textarea";
import Button from "@/components/Buttons";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Form from "@/components/Form";
import { api } from "@/services/apiService";
import { UserContext } from "@/contexts/UserContext";
import AuthLayer from "@/components/AuthLayer";
import { messageError, messageSuccess } from "@/components/Message";
import { useRouter } from "next/router";

function CreatePost() {
  const userCtx = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const schema = z.object({
    title: z
      .string({ required_error: "Este campo é obrigatório" })
      .min(2, "Este campo é obrigatório"),
    content: z
      .string({ required_error: "Este campo é obrigatório" })
      .min(2, "Este campo é obrigatório"),
  });

  const defaultValues = {
    title: "",
    content: "",
  };

  const form = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: typeof defaultValues) {
    try {
      setLoading(true);
      await api.post("/posts", {
        title: data.title,
        content: data.content,
        ongId: userCtx?.user?.Ong?.OngId,
        jobTypeId: 1,
      });
      messageSuccess("Post criado com sucesso");
      router.push("/ong");
    } catch (e: any) {
      messageError(e?.response?.data?.message || "Erro ao criar post");
    } finally {
      setLoading(false);
    }
    form.reset();
  }

  return (
    <LoggedLayout>
      <div className="post-creation p-6 flex flex-col gap-8">
        <div className="post-head p-6">
          <p className="text-2xl lg:text-4xl font-bold green-gradient">
            Criar post
          </p>
        </div>
        <Form className="post-body" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="inputs flex flex-col gap-8">
            <p>
              Você criará um trabalho do tipo:{" "}
              {userCtx?.user?.Ong?.OngType.Name}.
            </p>
            <Input
              value={form.watch("title")}
              {...form.register("title")}
              onChange={(e) => form.setValue("title", e.target.value)}
              id="title"
              name="Título"
              errorMessage={form.formState?.errors?.title?.message}
            />
            <Textarea
              value={form.watch("content")}
              {...form.register("content")}
              onChange={(e) => form.setValue("content", e.target.value)}
              id="content"
              name="Conteúdo"
              errorMessage={form.formState?.errors?.content?.message}
            />
            <div className="btn min-w-[max(50%,_250px)] m-auto">
              <Button loading={loading} className="w-full py-4">
                Criar post
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </LoggedLayout>
  );
}

export default CreatePost;
