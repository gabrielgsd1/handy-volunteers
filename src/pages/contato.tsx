import React from "react";
import Layout from "./_layout";
import contatos from "@/assets/contatos.jpg";
import logo from "../assets/logo.png";
import Image from "next/image";
import { AiOutlineMail, AiFillFacebook } from "react-icons/ai";
import Footer from "@/components/Footer/Footer";
import Button from "@/components/Buttons";

interface LayoutProps {
  children: JSX.Element;
}

function Contato({ children }: LayoutProps) {

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
              <p className="text-4xl md:text-5xl font-semibold">
                Fale Conosco
              </p>
              <div>
                <p className="text-4xl mt-4 md:text-2xl text-white">
                Estamos aguardando o seu contato
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="flex text-2xl p-4 justify-center font-semibold mt-8">Entre em contato conosco por telefone, ou preencha o formulário abaixo </p>

          <div className="flex flex-row mt-8 p-8 gap-16 justify-center ">
              
              <div>
                <span className="flex font-bold text-lg rounded-t-2xl text-custom-white bg-custom-dark-green justify-center p-4">
                  Mande sua dúvida ou sugestão
                </span>
                <form>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="Nome" className="block mb-2 text-l font-bold text-gray-900 mt-4 ml-4 dark:text-custom-green">Nome</label>
                      <input type="text" id="nome" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite seu nome" required></input>
                    </div>
                    <div>
                      <label htmlFor="Email" className="block mb-2 text-l font-bold text-gray-900 mt-4 ml-4 dark:text-custom-green">Email</label>
                      <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Exemplo@gmail.com" required></input>
                    </div>
                  </div>
                </form>
                <div>
                  <label className="block mb-2 mt-4 text-sm font-bold text-gray-900 dark:text-custom-green"></label>
                  <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escreva sua mensagem aqui..."></textarea>
                </div>
                <Button className="xl:text-lg text-base mt-6 font-normal shadow-md duration-200 bg-custom-green text-black px-3 py-4 rounded-md  hover:bg-custom-dark-green hover:text-black">
                  Enviar
                </Button>
              </div>

              <div>
                <span className="flex font-bold text-lg rounded-t-2xl text-custom-white bg-custom-dark-green justify-center p-4">
                  Problemas ou reclamações
                </span>
                <form>
                  <div className="grid gap-6  mb-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="Nome" className="block mb-2 text-l font-bold text-gray-900 mt-4 ml-4 dark:text-custom-green">Nome</label>
                      <input type="text" id="nome" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Digite seu nome" required></input>
                    </div>
                    <div>
                      <label htmlFor="cpf" className="block mb-2 text-l font-bold text-gray-900 mt-4 ml-4 dark:text-custom-green">CPF ou CNPJ</label>
                      <input type="cpf" id="cpfcont" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="___.___.___-__" required></input>
                    </div>
                    <div>
                      <label htmlFor="Email" className="block mb-2 text-l font-bold text-gray-900 mt-4 ml-4 dark:text-custom-green">Email</label>
                      <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Exemplo@gmail.com" required></input>
                    </div>
                    <div>
                      <label htmlFor="Telefone" className="block mb-2 text-l font-bold text-gray-900 mt-4 ml-4 dark:text-custom-green">Telefone</label>
                      <input type="tel" id="telefone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="(xx)99999-9999" required></input>
                    </div>
                  </div>
                </form>
                <div>
                  <label className="block mb-2 mt-4 text-sm font-bold text-gray-900 dark:text-white"></label>
                  <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escreva sua mensagem aqui..."></textarea>
                </div>
                <Button className=" xl:text-lg text-base mt-6 font-normal shadow-md duration-200 bg-custom-green text-black px-3 py-4 rounded-md  hover:bg-custom-dark-green hover:text-black">
                  Enviar
                </Button>
              </div>
            
          </div>

        <Footer />
        
      </main>

    </Layout>
  )
}

export default Contato;