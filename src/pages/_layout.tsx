import Button from "@/components/Buttons";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logotipo from "@/assets/logo.png";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import styled from "styled-components";

interface LayoutProps {
  children: JSX.Element;
}

function Layout({ children }: LayoutProps) {
  const [showMenu, setShowMenu] = useState(true);
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (document.body.clientWidth >= 1024) setShowMenu(true);
    });
    const header = document.querySelector(".header");
    if (header) {
      document.body.addEventListener("click", (e) => {
        if (document.body.clientWidth >= 1024) return;
        if (header.contains(e.target as Node)) {
          e.stopPropagation();
          return setShowMenu(true);
        }
        setShowMenu(false);
      });
    }
  }, []);

  return (
    <div className="min-h-screen grid grid-rows-[auto,_1fr] box-border">
      <header className="header text-custom-white bg-custom-black px-8 text-lg sticky top-0 left-0 w-full">
        <nav className=" relative navbar grid grid-cols-3  justify-between p-2 h-20">
          <div
            className="lg:hidden my-auto hamburguer"
            onClick={(e) => {
              e.stopPropagation();
              setShowMenu((v) => !v);
            }}
          >
            <FiMenu
              size={40}
              className={`duration-150 ${showMenu && "rotate-90"}`}
            />
          </div>
          <Image className="m-auto" alt="logo" src={logotipo} width={70} />

          <div
            className={`${
              !showMenu && "hidden"
            } bg-custom-black w-full lg:pt-0 pt-6 lg:bg-none lg:static left-1/2 -translate-x-1/2 lg:translate-x-0 top-full absolute flex-col lg:flex-row flex gap-8 items-center justify-center`}
          >
            <Link href="/" className="option">
              <Span>Início</Span>
            </Link>

            <Link href={"/sobrenos"}>
              <Span>Sobre nós</Span>
            </Link>

            <div className="option">
              <Span>Contato</Span>
            </div>
          </div>

          <div className="hidden lg:flex ml-auto gap-3 items-center">
            <Link href="/">
              <SecondaryButton className="shadow-md duration-200">
                Login
              </SecondaryButton>
            </Link>
            <Link href="/registro">
              <Button className="btn-cadastro shadow-md duration-200 bg-custom-green text-black px-3 py-2 rounded-md  hover:bg-custom-dark-green hover:text-black">
                Cadastro
              </Button>
            </Link>
          </div>
        </nav>
      </header>
      <div className="box-border">{children}</div>
    </div>
  );
}

const Span = styled.span`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: 150ms;
    top: 102%;
    transform: scaleX(0);
    transform-origin: 0 0;
    height: 3px;
    width: 100%;
    background: #3fcc73;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export default Layout;
