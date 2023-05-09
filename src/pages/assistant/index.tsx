import React, { useContext, useEffect, useState } from "react";
import LoggedLayout from "../_loggedInLayout";
import { UserContext } from "@/contexts/UserContext";
import { useRouter } from "next/router";
import Select from "@/components/Select";
import { useFetch } from "@/hooks/useFetch";
import { OngType, Post } from "@/interfaces/interfaces";
import { GetServerSideProps } from "next";
import { api } from "@/services/apiService";
import Loading from "@/components/Loading";
import moment from "moment";
import Link from "next/link";
import Button from "@/components/Buttons";

interface AssistantProps {
  ongTypes: OngType[];
}

function Assistant(props: AssistantProps) {
  props.ongTypes;
  const userCtx = useContext(UserContext);
  const router = useRouter();
  const [filter, setFilter] = useState<null | string>(null);
  const posts = useFetch<Post[]>("GET", "/posts");
  const currentJobs = useFetch<Post[]>(
    "GET",
    `/posts/assistant/current/${userCtx?.user?.Assistant?.AssistantId}`
  );

  function handleChangeFilter(value: string) {
    const filterValue = Boolean(value) ? value : null;
    setFilter(() => filterValue);
    posts.trigger({ route: `/posts/ong-type/${value}` });
  }

  function handleSorting(value: string) {
    posts.trigger({
      query: {
        sorting: value.startsWith("date") ? "CreatedAt" : "Title",
        ascOrDesc: value.endsWith("asc") ? "ASC" : "DESC",
      },
    });
  }

  if (!userCtx) return <></>;

  useEffect(() => {
    setFilter(null);
  }, []);

  // if (posts.isLoading)
  //   return (
  //     <LoggedLayout>
  //       <Loading />
  //     </LoggedLayout>
  //   );

  return (
    <LoggedLayout>
      <div>
        <div className="head">
          <p className="lg:text-4xl text-3xl font-semibold">
            Olá, {userCtx.user?.Name}
          </p>
          <p className="text-green-500">
            Você possui {currentJobs.data?.length} trabalhos em andamento
          </p>
        </div>
        <div className="body">
          <div className="filters py-8 flex gap-8">
            <Select
              name="Filtrar por tipo de trabalho"
              id="job-type"
              onChange={(e) => handleChangeFilter(e.currentTarget.value)}
            >
              <option selected={filter === null} value=""></option>
              {props.ongTypes.map((type) => (
                <option
                  selected={(filter || 0) === type.OngTypeId}
                  value={type.OngTypeId.toString()}
                >
                  {type.Name}
                </option>
              ))}
            </Select>
            <Select
              onChange={(e) => handleSorting(e.currentTarget.value)}
              name="Ordernar por:"
              id="job-type"
            >
              <option selected value="date-asc">
                Data (mais recentes primeiro)
              </option>
              <option value="date-desc">Data (mais antigas primeiro)</option>
              <option value="title-asc">Nome (A-Z)</option>
              <option value="title-desc">Nome (Z-A)</option>
            </Select>
          </div>
          <div className="current-jobs">
            <p className="text-2xl font-semibold tracking-wide">
              Seus trabalhos atuais
            </p>
            {currentJobs.data?.map((post) => (
              <BigPost post={post} />
            ))}
          </div>
          <Posts posts={posts.data} loading={posts.isLoading} />
        </div>
      </div>
    </LoggedLayout>
  );
}

export default Assistant;

export function Posts({
  posts,
  loading,
}: {
  posts?: Post[] | null;
  loading?: boolean;
}) {
  if (loading) return <Loading />;
  if (!posts?.length) return <p>Não há trabalhos.</p>;
  return (
    <div className="grid place-items-center gap-8 grid-cols-2">
      {posts?.map((post) => {
        return (
          <div className="bg-custom-black w-full h-full rounded-xl px-8 py-4 duration-200 outline outline-transparent hover:outline-custom-dark-green/75 hover:scale-[1.025] hover:bg-[rgb(23,23,23)]">
            <p className="text-2xl font-semibold">{post.Title}</p>
            <p>{post.Ong?.OngName}</p>
            <p className="py-3">
              {post.Content.substring(0, 100)}
              {post.Content.length > 100 && "..."}
            </p>
            <p>
              Postada no dia {moment(post.CreatedAt).format("DD/MM/YYYY HH:mm")}
            </p>
            <p>{post.AssistantId ? "Vaga preenchida" : "Vaga Aberta"}</p>
            <div className="flex justify-end">
              <Button>
                <Link target="_blank" href={"/posts/" + post.PostId}>
                  Ver Vaga{" "}
                </Link>
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function BigPost({ post }: { post: Post }) {
  return (
    <div className="p-4">
      <p>{post.Title}</p>
      <p>{post.Content.substring(0, 200)}</p>
      <p>
        {post.Ong?.OngName} - {post.Ong?.Cnpj}
      </p>
      <p></p>
      <p>Postado em {moment(post.CreatedAt).format("DD/MM/YYYY")}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await api.get<OngType[]>("/ongtype");

  return {
    props: {
      ongTypes: res.data,
    },
  };
};
