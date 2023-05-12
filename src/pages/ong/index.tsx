import React from "react";
import LoggedLayout from "../_loggedInLayout";
import { GetServerSideProps } from "next";
import { api } from "@/services/apiService";
import { Ong, Post } from "@/interfaces/interfaces";
import moment from "moment";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import Button from "@/components/Buttons";
import Link from "next/link";
import GreenHighlight from "@/components/GreenHighlight";
import Jobs from "@/components/Jobs/jobs";


interface OngHomePageProps {
  ong: Ong;
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

        <div className="text-xl my-8">
          <p className="font-semibold">
            Olá <GreenHighlight>{props.ong.OngName}</GreenHighlight> seja bem-vindo. 
            Aqui estão os trabalhos postados por você.
          </p>
        </div>

        <div className="flex flex-col w-96 text-xl p-8 bg-black border rounded-xl outline outline-white">

          <p className="font-xl font-semibold tracking-tight">
            Vagas em aberto: {openJobs.length}
          </p>
          <p className="font-xl font-semibold tracking-tight">
            Trabalhos em andamento: {notFinishedJobs.length}
          </p>
          <p className="font-xl font-semibold tracking-tight">
            Trabalhos finalizados: {finishedJobs.length}
          </p>
          
        </div>
        <Jobs posts={props.posts}       />

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
