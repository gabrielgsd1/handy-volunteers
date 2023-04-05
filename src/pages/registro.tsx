import Form from "@/components/Form";
import Input from "@/components/Inputs/Input";
import MaskedInput from "@/components/Inputs/MaskedInput";
import AssistantForm from "@/components/RegisterForms/AssistantForm";
import OngForm from "@/components/RegisterForms/OngForm";
import TabComponent from "@/components/TabComponent";
import React from "react";
import ReactInputMask from "react-input-mask";
import Layout from "./_layout";

function Registro() {
  const forms = [
    { name: "Sou ONG", component: <OngForm /> },
    { name: "Sou Assistente", component: <AssistantForm /> },
  ];
  return (
    <Layout>
      <main className="flex gap-10 items-center mx-10 my-5">
        <div className="flex-1 text-center">
          <p className="text-2xl absolute w-[45%] top-1/2">
            Primeiro, vamos precisar de alguns dados, como saber se você é uma{" "}
            <span className="font-bold">ONG</span> ou um{" "}
            <span className="font-bold">assistente</span> e outras informações
            complementares. Após isso, você já poderá{" "}
            <span className="font-bold">ajudar outras pessoas</span> :)
          </p>
        </div>
        <div className="flex-1 gap-3 flex items-center flex-col">
          <p className="text-xl">
            Primeiro, escolha você é uma Ong ou deseja ser um Assistente?
          </p>
          <TabComponent tabs={forms} />
        </div>
      </main>
    </Layout>
  );
}

export default Registro;
