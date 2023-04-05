import Button from "@/components/Buttons";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import Image from "next/image";
import React from "react";
import logotipo from "@/assets/logo.png";

interface LayoutProps {
  children: JSX.Element;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen grid grid-rows-[auto,_1fr] box-border">
      <header className="text-custom-white px-8 text-lg sticky top-0 left-0 w-full">
        <nav className="navbar grid grid-cols-3  justify-between p-2 h-20">
          <Image alt="logo" src={logotipo} width={70} />

          <div className="flex gap-8 items-center justify-center">
            <div className="option">Início</div>
            <div className="option">Sobre nós</div>
            <div className="option">Contato</div>
          </div>

          <div className="flex ml-auto gap-3 items-center">
            <SecondaryButton>Login</SecondaryButton>
            <Button className="btn-cadastro shadow-md duration-200 bg-custom-green text-black px-3 py-2 rounded-md  hover:bg-custom-dark-green hover:text-black flex">
              Cadastro
            </Button>
          </div>
        </nav>
      </header>
      <div className="box-border">{children}</div>
    </div>
  );
}

export default Layout;
