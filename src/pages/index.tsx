import React from "react";
import Layout from "./_layout";
import maos from "@/assets/maos.png";
import logo from "../assets/logo.png";
import Image from "next/image";
import GreenHighlight from "@/components/GreenHighlight";
import Button from "@/components/Buttons";
import Link from "next/link";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import Frames from "@/components/Frames/frames";
import styled from "styled-components";

interface LayoutProps {
  children: JSX.Element;
}

function TelaInicial({ children }: LayoutProps) {
  return (
    <Layout>
      <main className="grid text-lg responsive-font">
        <div className="px-12 py-16 relative">
          <Image
            src={maos}
            alt="ij"
            className="absolute w-full h-full object-cover -z-10 inset-0 after:[content:''] opacity-25"
          />
          <div className="text-and-logo flex items-center gap-8">
            <div className="logo">
              <Image src={logo} width={120} alt="logo" />
            </div>
            <div className="text">
              <p className="text-4xl md:text-5xl font-bold">
                <GreenHighlight className="green-gradient">
                  #FazerADiferença
                </GreenHighlight>
              </p>

              <div>
                <p className="text-4xl mt-4 md:text-5xl text-white">
                  Contribuindo para um mundo melhor.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 flex-col lg:flex-row justify-start lg:items-end mt-32 lg:mt-52 font-bold">
            <Link href="/registro">
              <SecondaryButton className="xl:text-lg text-base font-normal shadow-md duration-200">
                Quero ser um voluntário
              </SecondaryButton>
            </Link>
            <Link href="/registro">
              <Button className="xl:text-lg text-base font-normal btn-cadastro shadow-md duration-200 bg-custom-green text-black px-3 py-2 rounded-md  hover:bg-custom-dark-green hover:text-black">
                Quero cadastrar minha ONG
              </Button>
            </Link>
          </div>
        </div>

        <div className="p-16 mt-8">
          <p className="text-2xl text-center mb-16 px-2">
            A HandyVolunteers tem o objetivo de facilitar a conexão entre
            aqueles que desejam fazer a diferença e as ONGs que buscam apoio
            para suas causas, através de:
          </p>
          <Frames />
        </div>
      </main>
    </Layout>
  );
}

export default TelaInicial;
