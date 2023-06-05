import Form from "@/components/Form";
import Input from "@/components/Inputs/Input";
import MaskedInput from "@/components/Inputs/MaskedInput";
import AssistantForm from "@/components/RegisterForms/AssistantForm";
import OngForm from "@/components/RegisterForms/OngForm";
import TabComponent from "@/components/TabComponent";
import React from "react";
import ReactInputMask from "react-input-mask";
import Layout from "./_layout";
import GreenHighlight from "@/components/GreenHighlight";
import { GetServerSideProps } from "next";
import { api } from "@/services/apiService";
import { OngType } from "@/interfaces/interfaces";
import { Head } from "next/document";

interface RegistroProps {
  ongTypes: OngType[];
}

function Registro({ ongTypes }: RegistroProps) {
  const forms = [
    { name: "Sou ONG", component: <OngForm ongTypes={ongTypes} /> },
    { name: "Sou Assistente", component: <AssistantForm /> },
  ];
  return (
    <>
      <Head>
        <title>Registro</title>
      </Head>
      <Layout>
        <main className="flex gap-10 flex-col lg:flex-row items-center mx-10 my-8">
          <div className="flex-1 text-center">
            <p className="text-xl md:text-2xl top-1/2">
              Vamos precisar de alguns dados, como saber se você é uma{" "}
              <GreenHighlight>ONG</GreenHighlight> ou um{" "}
              <GreenHighlight>assistente</GreenHighlight> e outras informações
              complementares. Após isso, você já poderá{" "}
              <GreenHighlight>ajudar outras pessoas</GreenHighlight> {":)"}
            </p>
          </div>
          <div className="flex-1 gap-3 flex items-center flex-col">
            <p className="text-xl">
              Primeiro, você é uma Ong ou deseja ser um Assistente?
            </p>
            <TabComponent tabs={forms} />
          </div>
        </main>
      </Layout>
    </>
  );
}

export default Registro;

export const getServerSideProps: GetServerSideProps = async () => {
  const ongTypes = await api.get<OngType[]>("/ongtype");

  return {
    props: {
      ongTypes: ongTypes.data,
    },
  };
};
