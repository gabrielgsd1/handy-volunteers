import React from "react";
import { GetServerSideProps } from "next";
import { api } from "@/services/apiService";
import { Ong, Post } from "@/interfaces/interfaces";
import moment from "moment";
import Button from "@/components/Buttons";
import Link from "next/link";


interface JobsProps {

posts:Post[]
  
}

function Jobs(props: JobsProps) {
    return (
        <div className="grid place-items-center mt-16 gap-8 grid-cols-2">
          {props.posts.map((post) => {
            return (
                <div className="bg-custom-black w-full h-full rounded-xl px-8 py-4 duration-200 outline outline-transparent hover:outline-custom-green/75 hover:scale-[1.025] hover:bg-black">
                    <p className="text-2xl font-semibold">{post.Title}</p>
                    <p>{post.Ong?.OngName}</p>
                    <p>{post.Content.substring(0, 100)}</p>
                    <p>
                      Postada no dia{" "}
                      {moment(post.CreatedAt).format("DD/MM/YYYY HH:mm")}
                    </p>
                    <p className="mt-2 text-custom-green font-semibold">{!post.AssistantId && !post.FinishedAt ? "Vaga Aberta" : null}</p>
                    <p className="mt-2 text-custom-orange font-semibold">{post.AssistantId && !post.FinishedAt ? "Em Andamento" : null}</p>
                    <p className="mt-2 text-custom-strong-red font-semibold">{post.AssistantId && post.FinishedAt ? "Vaga preenchida" : null}</p>
                    
                    <div className="flex justify-end">
                  <Button>
                    <Link href={"/posts/" + post.PostId}> Ver Vaga </Link>
                  </Button>
                    </div>
                </div>
            );
      })}
    </div>
        )
}

export default Jobs;
