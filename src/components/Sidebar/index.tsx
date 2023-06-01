import { UserContext } from "@/contexts/UserContext";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const availableRoutes: Array<{ role: string[]; text: string; path: string }> = [
  {
    role: ["Assistant", "Ong"],
    text: "Início",
    path: "/home",
  },
  {
    role: ["Ong"],
    text: "Meus trabalhos atuais",
    path: "/ong/current",
  },
  {
    role: ["Assistant"],
    text: "Meus certificados",
    path: "/certificates",
  },
  {
    role: ["Ong"],
    text: "Criar trabalho",
    path: "/posts/create",
  },
  {
    role: ["Assistant"],
    text: "Trabalhos atuais",
    path: "/current-jobs",
  },
];

function Sidebar({ isOpen, closeSidebar, openSidebar }) {
  const userCtx = useContext(UserContext);

  useEffect(() => {
    if (document.body.clientWidth >= 1024) openSidebar();
    window.addEventListener("resize", () => {
      if (document.body.clientWidth >= 1024) return openSidebar();
      closeSidebar();
    });
  }, []);
  return (
    <aside
      className={`${
        document.body.clientWidth <= 1024 && "duration-300"
      } [grid-area:_sidebar] block p-6 z-10 bg-custom-black top-0 bottom-0 fixed ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:w-[250px]`}
    >
      <div className="sidebar-head text-center mb-6">
        <div className="lg:hidden">
          <AiOutlineClose
            className="ml-auto cursor-pointer"
            size={25}
            onClick={closeSidebar}
          />
        </div>
        <div className="w-24 h-24 m-auto mb-4 rounded-full bg-slate-600"></div>
        <p className="font-semibold lg:text-base text-sm">
          {userCtx?.user?.Name.split(" ").slice(0, 2).join(" ")}
        </p>
        {/* <p className="lg:text-base text-sm">{userCtx?.user?.Email}</p> */}
      </div>
      <div className="items flex flex-col gap-2 items-start">
        {availableRoutes.map(
          (route) =>
            route.role.includes(userCtx?.user?.Role?.Name || "") && (
              <button className="item hover:text-custom-green">
                <Link href={route.path}>{route.text}</Link>
              </button>
            )
        )}

        {/* <button className="item hover:text-custom-green">
          <Link href="/home">Início</Link>
        </button>
        <button className="item hover:text-custom-green">
          <Link href="/my-profile">Meu perfil</Link>
        </button>
        <button className="item hover:text-custom-green">
          Trabalhos realizados.
        </button>
        <button className="item hover:text-custom-green">
          Procurar por trabalhos
        </button>
        <button className="item hover:text-custom-green">
          Minhas preferências
        </button>
        <button className="item hover:text-custom-green">Certificados</button> */}
        <button className="item hover:text-custom-green">Ajuda</button>
        <button
          className="item hover:text-custom-green"
          onClick={userCtx?.signOut}
        >
          Sair
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
