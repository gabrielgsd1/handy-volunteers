import React from "react";
import LoggedLayout from "../_loggedInLayout";
import { GetServerSideProps } from "next";
import { api } from "@/services/apiService";
import { Ong, Post } from "@/interfaces/interfaces";
import moment from "moment";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import Button from "@/components/Buttons";
import Link from "next/link";

interface OngHomePageProps {
  posts: Post[];
}

function OngHomePage(props: OngHomePageProps) {
  const notFinishedJobs = props.posts.filter(
    (post) => post.AssistantId && !post.FinishedAt
  );
  const finishedJobs = props.posts.filter(
    (post) => post.AssistantId && post.FinishedAt
  );
  const openJobs = props.posts.filter(
    (post) => !post.AssistantId && !post.FinishedAt
  );

  return (
    <LoggedLayout>
      <section className="px-16">
        <p className="font-xl font-semibold tracking-tight">
          Trabalhos não finalizados: {notFinishedJobs.length}
        </p>
        <p className="font-xl font-semibold tracking-tight">
          Trabalhos finalizados: {finishedJobs.length}
        </p>
        <p className="font-xl font-semibold tracking-tight">
          Trabalhos abertos: {openJobs.length}
        </p>
        {/* {props.posts.map((post) => {
          return (
            <div>
              <p> Olá {post.Ong?.OngName}. Aqui estão suas vagas.</p>
              <p>
                {" "}
                Você possui
                {post.AssistantId && post.FinishedAt ? (
                  <p className="text-custom-dark-green">
                    {" "}
                    Trabalhos Finalizados
                  </p>
                ) : null}
                {post.AssistantId != null && post.FinishedAt == null
                  ? "Trabalhos em Andamento"
                  : null}
                {post.FinishedAt && post.Assistant == null ? (
                  <p className="text-custom-green"> Vagas em Aberto</p>
                ) : null}
              </p>
            </div>
          );
        })} */}
        {/* Div de Posts */}
        <div className="grid place-items-center gap-8 grid-cols-2">
          {props.posts.map((post) => {
            return (
              <div className="bg-custom-black w-full h-full rounded-xl px-8 py-4 duration-200 outline outline-transparent hover:outline-custom-dark-green/75 hover:scale-[1.025] hover:bg-[rgb(23,23,23)]">
                <p className="text-2xl font-semibold">{post.Title}</p>
                <p>{post.Ong?.OngName}</p>
                <p>{post.Content.substring(0, 100)}</p>
                <p>
                  Postada no dia{" "}
                  {moment(post.CreatedAt).format("DD/MM/YYYY HH:mm")}
                </p>
                <p>{post.AssistantId ? "Vaga preenchida" : "Vaga Aberta"}</p>
                <div className="flex justify-end">
                  <Button>
                    <Link href={"/posts/" + post.PostId}> Ver Vaga </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </LoggedLayout>
  );
}

export default OngHomePage;

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await api.get<Post[]>("/posts");
  const ong = await api.get<Ong>("/ong/22");

  return {
    props: {
      posts: posts.data,
      ong: ong.data,
    },
  };
};
