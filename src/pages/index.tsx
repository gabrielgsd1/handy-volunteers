import { useContext, useEffect, useState } from "react";
import Input from "@/components/Inputs/Input";
import Link from "next/link";
import Form from "@/components/Form";
import Button from "@/components/Buttons";
import Layout from "./_layout";
import { UserContext } from "@/contexts/UserContext";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useFetch } from "@/hooks/useFetch";
import { messageError } from "@/components/Message";

const possibleComponents = {
  Ong: "",
  Assistant: "",
};

export default function Home(): JSX.Element {
  const userCtx = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const schema = z.object({
    email: z
      .string({ required_error: "Este campo é obrigatório" })
      .email("Preencha o e-mail corretamente"),
    password: z.string({ required_error: "Este campo é obrigatório" }),
  });

  const defaultValues = {
    email: "",
    password: "",
  };

  const form = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  // const fetch = useFetch("GET", "/posts", null, true);

  // useEffect(() => {
  //   fetch.trigger();
  // }, []);

  async function onSubmit(data: typeof defaultValues) {
    try {
      setLoading(true);
      const authorized = await userCtx?.signIn({
        email: data.email,
        password: data.password,
      });
      if (authorized) router.push("/home");
    } catch (e: any) {
      messageError(e.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <main className="flex items-center h-full">
        <div className="description flex-1 text-[#eee] text-center text-3xl">
          <span className="font-bold">Ajude</span> quem mais precisa, fazendo o
          bem para o mundo.
        </div>
        <div className="login flex-1">
          <Form
            className="m-8 flex gap-4 flex-col"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <Input
              {...form.register("email")}
              placeholder="Email"
              name="E-mail"
              id="email"
              onChange={(e) => form.setValue("email", e.target.value)}
              errorMessage={form.formState?.errors?.email?.message}
            />
            <Input
              {...form.register("password")}
              placeholder="Senha"
              name="Senha"
              id="password"
              type="password"
              onChange={(e) => form.setValue("password", e.target.value)}
              errorMessage={form.formState?.errors?.password?.message}
            />
            <Link
              href={"/registro"}
              className="text-custom-white hover:underline"
            >
              Ainda não possui login?
            </Link>
            <div className="flex justify-center my-2">
              <Button loading={loading} className="w-1/3">
                Entrar
              </Button>
            </div>
          </Form>
        </div>
      </main>
    </Layout>
  );
}
