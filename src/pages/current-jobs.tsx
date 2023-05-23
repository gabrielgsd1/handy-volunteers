import React, { useContext } from "react";
import LoggedLayout from "./_loggedInLayout";
import { useFetch } from "@/hooks/useFetch";
import { UserContext } from "@/contexts/UserContext";
import Post from "./posts/[post_id]";
import { BigPost } from "./assistant";
import Loading from "@/components/Loading";
import { GetServerSideProps } from "next";
import { OngType } from "@/interfaces/interfaces";
import { api } from "@/services/apiService";

function CurrentJobs() {
  const userCtx = useContext(UserContext);
  const currentJobs = useFetch<Post[]>(
    "GET",
    `/posts/ong/current/${userCtx?.user?.Assistant?.AssistantId}`
  );
  return (
    <LoggedLayout>
      <div className="mx-10">
        {currentJobs.isLoading ? (
          <Loading />
        ) : (
          <>
            <p className="text-green-500 text-2xl">
              Você possui {currentJobs.data?.length} trabalhos em andamento
            </p>
            <div className="current-jobs flex flex-col gap-6">
              {currentJobs.data?.map((post) => (
                <BigPost key={post.PostId} post={post} />
              ))}
            </div>
          </>
        )}
      </div>
    </LoggedLayout>
  );
}

export default CurrentJobs;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await api.get<OngType[]>("/ongtype");

  return {
    props: {
      ongTypes: res.data,
    },
  };
};
