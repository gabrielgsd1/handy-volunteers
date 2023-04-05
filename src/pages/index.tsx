import { useState } from "react";
import Input from "@/components/Inputs/Input";
import Link from "next/link";
import Form from "@/components/Form";
import Button from "@/components/Buttons";
import Layout from "./_layout";

const possibleComponents = {
  Ong: "",
  Assistant: "",
};

export default function Home(): JSX.Element {
  const [currentComponent, setCurrentComponent] = useState<
    keyof typeof possibleComponents | null
  >(null);

  return (
    <>
      <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      <title>Handy Volunteers</title>
      <Layout>
        <main className="flex items-center h-full">
          <div className="description flex-1 text-[#eee] text-center text-3xl">
            <span className="font-bold">Ajude</span> quem mais precisa, fazendo
            o bem para o mundo.
          </div>
          <div className="login flex-1">
            <Form className="m-8 flex gap-4 flex-col">
              <Input placeholder="Email" name="E-mail" id="email" />
              <Input
                placeholder="Senha"
                name="Senha"
                id="password"
                type="password"
              />
              <Link
                href={"/register"}
                className="text-custom-white hover:underline"
              >
                Ainda possui não login?
              </Link>
              <div className="flex justify-center my-2">
                <Button className="w-1/3">Entrar</Button>
              </div>
            </Form>
          </div>
        </main>
      </Layout>
    </>
  );
}
