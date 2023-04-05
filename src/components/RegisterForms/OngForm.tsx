import Link from "next/link";
import React from "react";
import ReactInputMask from "react-input-mask";
import Button from "../Buttons";
import Form from "../Form";
import Input from "../Inputs/Input";
import MaskedInput from "../Inputs/MaskedInput";

function OngForm() {
  return (
    <Form className="flex-1 flex flex-col gap-2 w-full">
      <h2 className="font-bold text-center text-2xl text-white">
        Cadastro de ONG
      </h2>
      <Input name="Nome Fantansia" id="name" type="text" />
      <Input name="E-mail" id="email" />
      <MaskedInput mask="99.999.9999/9999-99" name="CNPJ" id="cnpj" />
      <Input name="Ramo da ONG" id="role" />
      <Link href={"/"} className="text-custom-white hover:underline">
        Já possui login?
      </Link>
      <Button className="w-1/2 mt-4 m-auto">Cadastrar</Button>
    </Form>
  );
}

export default OngForm;
