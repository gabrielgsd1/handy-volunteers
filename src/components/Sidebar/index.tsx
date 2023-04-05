import React from "react";

function Sidebar() {
  return (
    <aside className="[grid-area:_sidebar] outline outline-custom-white outline-1 p-6">
      <div className="sidebar-head text-center mb-6">
        <div className="w-24 h-24 m-auto mb-4 rounded-full bg-slate-600"></div>
        <p>Nome da pessoa</p>
        <p>emaildapessoa@gmail.com</p>
      </div>
      <div className="items flex flex-col gap-2 items-start">
        <button className="item hover:text-custom-green">Meu perfil</button>
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
