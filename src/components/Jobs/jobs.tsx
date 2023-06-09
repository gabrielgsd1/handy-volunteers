import React, { useContext } from "react";
import { GetServerSideProps } from "next";
import { api } from "@/services/apiService";
import { Ong, Post } from "@/interfaces/interfaces";
import moment from "moment";
import Button from "@/components/Buttons";
import Link from "next/link";
import { formatDate } from "@/utils/utils";
import SecondaryButton from "../Buttons/SecondaryButton";
import { UserContext } from "@/contexts/UserContext";
import Loading from "../Loading";

interface JobsProps {
  posts: Post[] | null;
  loading?: boolean;
  onJobFinished?: (post: Post) => void;
  postIdButtonLoading?: null | string;
  noStatus?: boolean;
}

function Jobs({
  posts,
  loading,
  onJobFinished,
  postIdButtonLoading,
  noStatus,
}: JobsProps) {
  const userCtx = useContext(UserContext);
  if (loading) return <Loading />;
  if (!posts?.length) return <p>Não há trabalhos.</p>;
  return (
    <div className="grid place-items-center mt-16 gap-8 grid-cols-1 lg:grid-cols-2">
      {posts.map((post) => {
        return (
          <div className="responsive-font bg-custom-black w-full h-full rounded-xl px-8 py-4 duration-200 outline outline-transparent hover:outline-custom-green/75 hover:scale-[1.025] hover:bg-black">
            <p className="text-lg lg:text-2xl font-semibold">{post.Title}</p>
            <p className="text-base lg:text-xl">
              Postado por {post.Ong?.OngName}
            </p>
            <p className="text-sm lg:text-base text-ellipsis">
              {post.Content.substring(0, 100)}
            </p>
            <p className="mt-2">
              Postada no dia {moment(post.CreatedAt).format("DD/MM/YYYY HH:mm")}
            </p>
            {!noStatus && (
              <>
                {!post.AssistantId && !post.FinishedAt && (
                  <p className="mt-2 text-custom-green font-semibold">
                    Vaga Aberta
                  </p>
                )}
                {post.AssistantId && !post.FinishedAt && (
                  <p className="mt-2 text-custom-orange font-semibold">
                    Em Andamento
                  </p>
                )}
                {post.AssistantId && post.FinishedAt && (
                  <p className="mt-2 text-custom-strong-red font-semibold">
                    Vaga preenchida
                  </p>
                )}

                {post.FinishDate && post.StartDate && (
                  <p>
                    {formatDate(post.StartDate)} até{" "}
                    {formatDate(post.FinishDate)}
                  </p>
                )}
              </>
            )}
            <div className="btns flex gap-6 justify-end items-center pt-4">
              <div className="flex justify-end">
                {userCtx?.user?.Role.Name === "Ong" && onJobFinished && (
                  <SecondaryButton
                    onClick={() => onJobFinished && onJobFinished(post)}
                    loading={postIdButtonLoading === post.PostId}
                  >
                    Marcar como finalizado
                  </SecondaryButton>
                )}
              </div>
              <div className="flex justify-end">
                <Link href={"/posts/" + post.PostId}>
                  <Button>Ver Vaga</Button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Jobs;
