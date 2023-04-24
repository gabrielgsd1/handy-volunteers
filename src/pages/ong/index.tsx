import React from "react";
import LoggedLayout from "../_loggedInLayout";
import { GetServerSideProps } from "next";
import { api } from "@/services/apiService";
import { Post } from "@/interfaces/interfaces";

interface OngHomePageProps {
  posts: Post[];
}

function OngHomePage(props: OngHomePageProps) {
  const usuarios = [
    { name: "gabriel", age: 14 },
    { name: "marcos", age: 12 },
    { name: "teste", age: 2 },
  ];

  const usuariosComIdadeDobrada = usuarios.map((usuario) => {
    return {
      name: usuario.name,
      age: usuario.age * 2,
    };
  });

  const elementoParagrafoComUsuario = usuarios.map((usuario) => {
    return (
      <p>
        {usuario.name} tem {usuario.age} anos
      </p>
    );
  });

  return (
    <LoggedLayout>
      <section className="px-8">
        ***só renderizar os posts***
        <p>
          os posts devem conter o titulo, conteúdo e embaixo do lado direito um
          botão (componente Button) chamado Ver Mais
        </p>
        <p className="py-4">
          o array de posts está dentro do parametro props (la em cima, é um
          parametro do componente OngHomePage)
        </p>
        <p className="my-8">exemplo de map</p>
        {usuarios.map((usuario) => {
          return (
            <p>
              {usuario.name} tem {usuario.age} anos
            </p>
          );
        })}
      </section>
    </LoggedLayout>
  );
}

export default OngHomePage;

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await api.get<Post[]>("/posts");

  return {
    props: {
      posts: posts.data,
    },
  };
};
