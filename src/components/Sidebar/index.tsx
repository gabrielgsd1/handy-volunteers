import { UserContext } from "@/contexts/UserContext";
import Link from "next/link";
import React, { useContext } from "react";

function Sidebar() {
  const userCtx = useContext(UserContext);
  return (
    <aside className="[grid-area:_sidebar] p-6">
      <div className="sidebar-head text-center mb-6">
        <div className="w-24 h-24 m-auto mb-4 rounded-full bg-slate-600"></div>
        <p className="font-semibold">{userCtx?.user?.Name}</p>
        <p>{userCtx?.user?.Email}</p>
      </div>
      <div className="items flex flex-col gap-2 items-start">
        <button className="item hover:text-custom-green">
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
        <button className="item hover:text-custom-green">Certificados</button>
        <button className="item hover:text-custom-green">Ajuda</button>
      </div>
    </aside>
  );
}

export default Sidebar;
