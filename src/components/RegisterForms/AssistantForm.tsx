import React from "react";
import ReactInputMask from "react-input-mask";
import Button from "../Buttons";
import Form from "../Form";
import Input from "../Inputs/Input";
import MaskedInput from "../Inputs/MaskedInput";

function AssistantForm() {
  return (
    <Form className="flex-1 flex flex-col gap-2 w-full">
      <h2 className="font-bold text-center text-2xl text-white">
        Cadastro de Voluntário
      </h2>
      <Input
        name="Nome"
        id="name"
        type="text"
        className="w-full bg-gray-50 border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 rounded-3xl px-3 py-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none duration-200"
      />
      <Input id="email" name="E-mail" />
      <MaskedInput mask="999.999.999-99" name="CPF" id="cpf" />
      <Input type="password" id="password" name="Senha" />
      <Input type="password" id="password-confirm" name="Confirmar Senha" />

      <Button className="w-1/2 mt-4 m-auto">Cadastrar</Button>
    </Form>
  );
}

export default AssistantForm;
