import React, { useState } from "react";
import Layout from "./_layout";
import contatos from "@/assets/contatos.jpg";
import logo from "../assets/logo.png";
import Image from "next/image";
import { AiOutlineMail, AiFillFacebook } from "react-icons/ai";
import Footer from "@/components/Footer/Footer";
import Button from "@/components/Buttons";
import Input from "@/components/Inputs/Input";
import Textarea from "@/components/Inputs/Textarea";
import { messageSuccess } from "@/components/Message";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MaskedInput from "@/components/Inputs/MaskedInput";

interface LayoutProps {
  children: JSX.Element;
}

function Contato({ children }: LayoutProps) {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);

  function callback(cb: () => void) {
    setTimeout(() => {
      messageSuccess("Mensagem enviada com sucesso");
      cb();
    }, 1000);
  }

  function h1() {
    setLoading1(true);
    callback(() => setLoading1(false));
  }

  function h2() {
    setLoading2(true);
    callback(() => setLoading2(false));
  }

  const defaultValuesF1 = {
    name: "",
    email: "",
    description: "",
  };

  const defaultValuesF2 = {
    name: "",
    email: "",
    phone: "",
    description: "",
  };

  const msg = "Preencha este campo";

  const schema1 = z
    .object({
      name: z.string({ required_error: msg }).min(1, msg),
      email: z.string({ required_error: msg }).email("E-mail incorreto"),
      description: z.string({ required_error: msg }).min(1, msg),
    })
    .required();

  const schema2 = z
    .object({
      name: z.string({ required_error: msg }).min(1, msg),
      email: z.string({ required_error: msg }).email("E-mail incorreto"),
      phone: z.string({ required_error: msg }).min(1, msg),
      description: z.string({ required_error: msg }).min(1, msg),
    })
    .required();

  const f1 = useForm({
    defaultValues: defaultValuesF1,
    resolver: zodResolver(schema1),
  });
  const f2 = useForm({
    defaultValues: defaultValuesF2,
    resolver: zodResolver(schema2),
  });

  return (
    <Layout>
      <main>
        <div className="px-12 py-16 relative">
          <Image
            src={contatos}
            alt="banner"
            className="absolute w-full h-full object-cover -z-10 inset-0 after:[content:''] opacity-25"
          />
          <div className="text-and-logo flex items-center gap-2 lg:gap-6">
            <div className="logo hidden lg:block">
              <Image src={logo} width={120} alt="logo" />
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-semibold">Fale Conosco</p>
              <div>
                <p className="text-4xl mt-4 md:text-2xl text-white">
                  Estamos aguardando o seu contato
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="flex text-2xl p-4 justify-center font-semibold mt-8">
          Entre em contato conosco por telefone, ou preencha o formulário abaixo{" "}
        </p>

        <div className="flex flex-col lg:flex-row mt-8 p-8 gap-16 justify-center ">
          <div>
            <span className="flex font-bold text-lg rounded-t-2xl text-custom-white bg-custom-dark-green justify-center p-4">
              Mande sua dúvida ou sugestão
            </span>
            <form
              className="p-8"
              onSubmit={f1.handleSubmit(() => {
                f1.clearErrors();
                h1();
              })}
            >
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <Input
                    {...f1.register("name")}
                    errorMessage={f1?.formState?.errors?.name?.message}
                    name="Nome"
                    onChange={(e) => {
                      if (f1.formState.errors.name) f1.clearErrors("name");
                      f1.setValue("name", e.target.value);
                    }}
                    id="name"
                  />
                </div>
                <div>
                  <Input
                    {...f1.register("email")}
                    errorMessage={f1?.formState?.errors?.email?.message}
                    name="E-mail"
                    onChange={(e) => {
                      if (f1.formState.errors.email) f1.clearErrors("email");
                      f1.setValue("email", e.target.value);
                    }}
                    id="email"
                  />
                </div>
              </div>
              <div>
                <Textarea
                  {...f1.register("description")}
                  name="Escreva sua mensagem aqui"
                  onChange={(e) => {
                    if (f1.formState.errors.description)
                      f1.clearErrors("description");
                    f1.setValue("description", e.target.value);
                  }}
                  errorMessage={f1?.formState?.errors?.description?.message}
                  id="textarea"
                />
              </div>
              <Button
                type="submit"
                loading={loading1}
                className="xl:text-lg text-base mt-6 font-normal shadow-md duration-200 bg-custom-green text-black px-3 rounded-md  hover:bg-custom-dark-green hover:text-black"
              >
                Enviar
              </Button>
            </form>
          </div>

          <div>
            <span className="flex font-bold text-lg rounded-t-2xl text-custom-white bg-custom-dark-green justify-center p-4">
              Problemas ou reclamações
            </span>
            <form
              className="p-8"
              onSubmit={f2.handleSubmit(() => {
                f2.clearErrors();
                h2();
              })}
            >
              <div>
                <Input
                  {...f2.register("name")}
                  name="Nome"
                  errorMessage={f2?.formState?.errors?.name?.message}
                  id="name"
                  onChange={(e) => {
                    if (f2.formState.errors.name) f2.clearErrors("name");
                    f2.setValue("name", e.target.value);
                  }}
                />
              </div>
              <div className="grid mt-4 gap-6 mb-6 md:grid-cols-2">
                <div>
                  <Input
                    {...f2.register("email")}
                    name="E-mail"
                    onChange={(e) => {
                      if (f2.formState.errors.email) f2.clearErrors("email");
                      f2.setValue("email", e.target.value);
                    }}
                    errorMessage={f2?.formState?.errors?.email?.message}
                    id="email-complaint"
                  />
                </div>
                <div>
                  <MaskedInput
                    mask="(99) 99999-9999"
                    {...f2.register("phone")}
                    name="Telefone"
                    id="phone"
                    onChange={(e) => {
                      if (f2.formState.errors.phone) f2.clearErrors("phone");
                      f2.setValue("phone", e.target.value);
                    }}
                    errorMessage={f2?.formState?.errors?.phone?.message}
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 mt-4 text-sm font-bold text-gray-900 dark:text-white"></label>
                <Textarea
                  {...f2.register("description")}
                  name="Escreva sua mensagem aqui"
                  onChange={(e) => {
                    if (f2.formState.errors.description)
                      f2.clearErrors("description");
                    f2.setValue("description", e.target.value);
                  }}
                  id="message"
                  errorMessage={f2?.formState?.errors?.description?.message}
                />
              </div>
              <Button
                loading={loading2}
                className="xl:text-lg text-base mt-6 font-normal shadow-md duration-200 bg-custom-green text-black px-3 rounded-md  hover:bg-custom-dark-green hover:text-black"
              >
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Contato;
