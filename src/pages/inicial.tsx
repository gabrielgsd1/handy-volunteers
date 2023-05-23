import React from "react";
import Layout from "./_layout";
import Maos from "@/assets/maos.png";
import Image from "next/image";
import Quadro1 from "@/assets/quadro1.svg"
import Quadro2 from "@/assets/quadro2.svg"
import Quadro3 from "@/assets/quadro3.svg"
import Quadro4 from "@/assets/quadro4.svg"
import GreenHighlight from "@/components/GreenHighlight";
import Button from "@/components/Buttons";
import Link from "next/link";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import Frames from "@/components/Frames/frames";


interface LayoutProps {
    children: JSX.Element;
  }

function TelaInicial({children}:LayoutProps) {
  return (
    <Layout>
      <main className="grid text-lg responsive-font">
            
            <Image className=" opacity-25 md:max-h-screen relative" alt="mãos" src={Maos} />

            <div className=" max-w-3xl text-left p-24 absolute"> 
                <p className="text-4xl md:text-5xl font-bold">
                    <GreenHighlight>#FazerADiferença</GreenHighlight>
                </p>

                <div>
                    <p className="text-4xl mt-4 md:text-5xl text-white">
                    Contribuindo para um mundo melhor.
                    </p>
                
                </div>
                
                <div className="flex gap-4 items-end mt-52 font-bold">
                    <Link href="/registro">
                      <SecondaryButton className="shadow-md duration-200">
                        Quero ser um volntário
                      </SecondaryButton>
                    </Link>
                    <Link href="/registro">
                      <Button className="btn-cadastro shadow-md duration-200 bg-custom-green text-black px-3 py-2 rounded-md  hover:bg-custom-dark-green hover:text-black">
                        Quero cadastrar minha ONG
                      </Button>
                    </Link>
                
                </div>
            </div>

            <div className="p-16 mt-8">
                <p className="text-2xl text-center mb-16 px-2">
                    A HandyVolunteers tem o objetivo de facilitar a conexão entre aqueles que desejam fazer a diferença e as ONGs que buscam apoio para suas causas, através de:
                </p>

            <Frames></Frames>
            </div>

        </main>
      
    </Layout>
  );
}

export default TelaInicial;