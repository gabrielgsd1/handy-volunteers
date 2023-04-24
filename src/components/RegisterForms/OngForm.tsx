import Link from "next/link";
import React, { useState } from "react";
import ReactInputMask from "react-input-mask";
import Button from "../Buttons";
import Form from "../Form";
import Input from "../Inputs/Input";
import MaskedInput from "../Inputs/MaskedInput";
import { OngType } from "@/interfaces/interfaces";
import Select from "../Select";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/services/apiService";
import { useRouter } from "next/router";

interface OngFormProps {
  ongTypes: OngType[];
}

function OngForm({ ongTypes }: OngFormProps) {
  type Schema = z.infer<typeof schema>;
  const defaultValues: Schema = {
    name: "",
    email: "",
    cnpj: "",
    ongType: null,
    password: "",
    confirm_password: "",
  };

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const schema = z.object({
    name: z.string().min(2, "Preencha o nome corretamente"),
    email: z.string().min(1, "Preencha um e-mail").email("E-mail inválido"),
    cnpj: z.string().min(1, "Preencha um CNPJ"),
    ongType: z
      .string({
        required_error: "Selecione um tipo de ONG",
        invalid_type_error: "Selecione um tipo de ONG",
      })
      .nullable(),
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
    confirm_password: z.string(),
  });

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

  async function onSubmit(data: Schema) {
    try {
      setLoading(true);
      if (!data.ongType)
        return setError("ongType", { message: "Selecione um tipo de ONG" });
      if (data.confirm_password != data.password)
        return setError("confirm_password", {
          message: "As senhas devem ser iguais.",
        });

      await api.post("/ong", {
        name: data.name,
        cnpj: data.cnpj,
        email: data.email,
        password: data.password,
        cep: "01315001",
        ongType: parseInt(data.ongType),
      });
      setLoading(false);
      router.push("/");
    } catch (e: any) {
      console.log(e.response.data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form
      className="flex-1 flex flex-col gap-4 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="font-bold text-center text-2xl text-white">
        Cadastro de ONG
      </h2>
      <Input
        value={watch("name")}
        errorMessage={errors.name?.message}
        {...register("name")}
        name="Nome Fantansia"
        id="name"
        type="text"
        onChange={(e) => setValue("name", e.target.value)}
      />
      <Input
        value={watch("email")}
        errorMessage={errors.email?.message}
        {...register("email")}
        name="E-mail"
        id="email"
        onChange={(e) => setValue("email", e.target.value)}
      />
      <div className="single-line grid grid-cols-2 gap-4">
        <MaskedInput
          value={watch("cnpj")}
          errorMessage={errors.cnpj?.message}
          {...register("cnpj")}
          mask="99.999.9999/9999-99"
          name="CNPJ"
          id="cnpj"
          onChange={(e) => setValue("cnpj", e.target.value)}
        />
        <Select
          defaultValue={""}
          errorMessage={errors.ongType?.message}
          {...register("ongType")}
          name="Ramo da ONG"
          id="role"
          divClassname="flex-1"
          onChange={(e) => setValue("ongType", e.currentTarget.value)}
        >
          <option selected></option>
          {ongTypes.map(function (ongType) {
            return <option value={ongType.OngTypeId}>{ongType.Name}</option>;
          })}
        </Select>
      </div>
      <Input
        value={watch("password")}
        errorMessage={errors.password?.message}
        {...register("password")}
        type="password"
        id="password"
        name="Senha"
        onChange={(e) => setValue("password", e.target.value)}
      />
      <Input
        value={watch("confirm_password")}
        errorMessage={errors.confirm_password?.message}
        {...register("confirm_password")}
        type="password"
        onChange={(e) => setValue("confirm_password", e.target.value)}
        id="password-confirm"
        name="Confirmar Senha"
      />
      <Link href={"/"} className="text-custom-white hover:underline my-4">
        Já possui login?
      </Link>
      <Button disabled={loading} className="w-1/2 mt-4 m-auto">
        Cadastrar
      </Button>
    </Form>
  );
}

export default OngForm;
