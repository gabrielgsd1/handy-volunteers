import React, { useContext } from "react";
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
import { UserContext } from "@/contexts/UserContext";
import { useFetch } from "@/hooks/useFetch";

function OngHomePage() {
  const userCtx = useContext(UserContext);

  const ongId = userCtx?.user?.Ong?.OngId;

  const ong = useFetch<Ong>("GET", `/ong/${ongId}`);
  const posts = useFetch<Post[]>("GET", `/posts/ong/${ongId}`);

  const notFinishedJobs = posts.data?.filter(
    (post) => post.AssistantId && !post.FinishedAt
  );
  const finishedJobs = posts.data?.filter(
    (post) => post.AssistantId && post.FinishedAt
  );
  const openJobs = posts.data?.filter(
    (post) => !post.AssistantId && !post.FinishedAt
  );

  return (
    <section className="pl-6 pr-16 mb-12">
      <div className="text-xl my-8">
        <p className="font-semibold">
          Olá{" "}
          <GreenHighlight className="capitalize">
            {ong.data?.OngName}
          </GreenHighlight>{" "}
          seja bem-vindo. Aqui estão os trabalhos postados por você.
        </p>
      </div>

      <div className="flex flex-col w-96 text-xl p-8 bg-custom-black border rounded-xl outline-1 outline-white">
        <p className="font-xl tracking-tight">
          Vagas em{" "}
          <GreenHighlight className="font-normal">aberto</GreenHighlight>:{" "}
          {openJobs?.length}
        </p>
        <p className="font-xl tracking-tight">
          Trabalhos em{" "}
          <GreenHighlight className="font-normal">andamento</GreenHighlight>:{" "}
          {notFinishedJobs?.length}
        </p>
        <p className="font-xl tracking-tight">
          Trabalhos{" "}
          <GreenHighlight className="font-normal">finalizados</GreenHighlight>:{" "}
          {finishedJobs?.length}
        </p>
      </div>
      {posts.data && <Jobs posts={posts.data} />}
    </section>
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
