import Link from "next/link";
import React, { useState } from "react";
import ReactInputMask from "react-input-mask";
import Button from "../Buttons";
import Form from "../Form";
import Input from "../Inputs/Input";
import MaskedInput from "../Inputs/MaskedInput";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/services/apiService";
import { useRouter } from "next/router";
import { messageError } from "../Message";

function AssistantForm() {
  type Schema = z.infer<typeof schema>;

  const router = useRouter();

  const schema = z.object({
    name: z.string().min(2, "Preencha o nome corretamente"),
    email: z.string().min(1, "Preencha um e-mail").email("E-mail inválido"),
    cpf: z.string().min(1, "Preencha um CPF"),
    phone: z.string({ required_error: "Informar o telefone é obrigatório" }),
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
    confirm_password: z.string(),
  });

  const defaultValues: Schema = {
    name: "",
    email: "",
    cpf: "",
    phone: "",
    password: "",
    confirm_password: "",
  };

  const {
    handleSubmit,
    setValue,
    register,
    getValues,
    setError,
    watch,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: typeof defaultValues) {
    try {
      setLoading(true);
      if (data.confirm_password != data.password)
        return setError("confirm_password", {
          message: "As senhas devem ser iguais.",
        });

      await api.post("/assistants", {
        name: data.name,
        cnpj_cpf: data.cpf,
        email: data.email,
        password: data.password,
        phone: data.phone,
        cep: "01315001",
      });
      setLoading(false);
      router.push("/");
    } catch (e: any) {
      messageError(e?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  }

  const [loading, setLoading] = useState(false);

  return (
    <Form className="flex-1 flex flex-col gap-2 w-full">
      <h2 className="font-bold text-center text-2xl text-white">
        Cadastro de Voluntário
      </h2>
      <Input
        {...register("name")}
        value={watch("name")}
        errorMessage={errors.name?.message}
        name="Nome"
        onChange={(e) => setValue("name", e.target.value)}
        id="name"
        type="text"
        className="w-full bg-gray-50 border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 rounded-3xl px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none duration-200"
      />
      <Input
        {...register("email")}
        value={watch("email")}
        errorMessage={errors.email?.message}
        id="email"
        name="E-mail"
        onChange={(e) => setValue("email", e.target.value)}
      />
      <MaskedInput
        {...register("cpf")}
        value={watch("cpf")}
        errorMessage={errors.cpf?.message}
        mask="999.999.999-99"
        name="CPF"
        id="cpf"
        onChange={(e) => setValue("cpf", e.target.value)}
      />
      <MaskedInput
        {...register("phone")}
        value={watch("phone")}
        errorMessage={errors.phone?.message}
        mask="(99) 99999-9999"
        name="Celular"
        id="phone"
        onChange={(e) => setValue("phone", e.target.value)}
      />
      <Input
        {...register("password")}
        value={watch("password")}
        errorMessage={errors.password?.message}
        type="password"
        id="password"
        name="Senha"
        onChange={(e) => setValue("password", e.target.value)}
      />
      <Input
        {...register("confirm_password")}
        value={watch("confirm_password")}
        errorMessage={errors.confirm_password?.message}
        type="password"
        id="password-confirm"
        name="Confirmar Senha"
        onChange={(e) => setValue("confirm_password", e.target.value)}
      />
      <Link href={"/"} className="text-custom-white hover:underline">
        Já possui login?
      </Link>
      <Button
        onClick={handleSubmit(onSubmit)}
        disabled={loading}
        loading={loading}
        className="w-1/2 mt-4 m-auto"
      >
        Cadastrar
      </Button>
    </Form>
  );
}

export default AssistantForm;
