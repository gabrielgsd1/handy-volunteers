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

interface JobsProps {
  posts: Post[];
  onJobFinished?: (post: Post) => void;
  postIdButtonLoading?: null | string;
}

function Jobs(props: JobsProps) {
  const userCtx = useContext(UserContext);
  return (
    <div className="grid place-items-center mt-16 gap-8 grid-cols-2">
      {props.posts.map((post) => {
        return (
          <div className="bg-custom-black w-full h-full rounded-xl px-8 py-4 duration-200 outline outline-transparent hover:outline-custom-green/75 hover:scale-[1.025] hover:bg-black">
            <p className="text-2xl font-semibold">{post.Title}</p>
            <p className="text-xl">{post.Ong?.OngName}</p>
            <p>{post.Content.substring(0, 100)}</p>
            <p className="mt-2">
              Postada no dia {moment(post.CreatedAt).format("DD/MM/YYYY HH:mm")}
            </p>
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
                {formatDate(post.StartDate)} até {formatDate(post.FinishDate)}
              </p>
            )}
            <div className="btns flex gap-6 justify-end items-center">
              <div className="flex justify-end">
                {userCtx?.user?.Role.Name === "Ong" && (
                  <SecondaryButton
                    onClick={() =>
                      props.onJobFinished && props.onJobFinished(post)
                    }
                    loading={props.postIdButtonLoading === post.PostId}
                  >
                    Marcar como finalizado
                  </SecondaryButton>
                )}
              </div>
              <div className="flex justify-end">
                <Button>
                  <Link href={"/posts/" + post.PostId}> Ver Vaga </Link>
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Jobs;
