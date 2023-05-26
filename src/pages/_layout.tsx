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
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (document.body.clientWidth >= 1024) setShowMenu(true);
    window.addEventListener("resize", (e) => {
      if (document.body.clientWidth >= 1024) setShowMenu(true);
      else setShowMenu(false);
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
    <div className="py-4 min-h-screen grid grid-rows-[auto,_1fr] box-border">
      <header className="after:inset-0 after:-z-10 after:[content:''] after:bg-black after:absolute backdrop-blur after:bg-custom-black/[85%] z-10 header text-custom-white px-8 text-lg sticky top-0 left-0 w-full">
        <nav className=" navbar grid grid-cols-3  justify-between h-20">
          <div className="flex lg:hidden my-auto hamburguer">
            <FiMenu
              onClick={(e) => {
                e.stopPropagation();
                setShowMenu((v) => !v);
              }}
              size={40}
              className={`inline-block duration-150 ${showMenu && "rotate-90"}`}
            />
          </div>
          <Image className="m-auto" alt="logo" src={logotipo} width={60} />

          <div
            className={`${
              !showMenu && "hidden"
            } w-full bg-custom-black py-4 lg:py-0 lg:pt-0 pt-6 lg:bg-none lg:static left-0 right-0 lg:translate-x-0 top-full absolute flex-col lg:flex-row flex gap-8 items-center justify-center`}
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
            <Link href="/login">
              <SecondaryButton className="lg:hidden shadow-md duration-200">
                Login
              </SecondaryButton>
            </Link>
            <Link href="/registro">
              <Button className="lg:hidden btn-cadastro shadow-md duration-200 bg-custom-green text-black px-3 py-2 rounded-md  hover:bg-custom-dark-green hover:text-black">
                Cadastro
              </Button>
            </Link>
          </div>

          <div className="hidden lg:flex ml-auto gap-3 items-center">
            <Link href="/login">
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
