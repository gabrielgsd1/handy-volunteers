import React, { useContext } from "react";
import LoggedLayout from "./_loggedInLayout";
import { useFetch } from "@/hooks/useFetch";
import { UserContext } from "@/contexts/UserContext";
import Post from "./posts/[post_id]";
import { BigPost } from "./assistant";
import Loading from "@/components/Loading";
import { Head } from "next/document";

function CurrentJobs() {
  const userCtx = useContext(UserContext);
  const currentJobs = useFetch<Post[]>(
    "GET",
    `/posts/assistant/current/${userCtx?.user?.Assistant?.AssistantId}`
  );
  return (
    <>
      <Head>
        <title>Trabalhos atuais</title>
      </Head>
      <LoggedLayout>
        <div className="mx-10 mb-8">
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
    </>
  );
}

export default CurrentJobs;

// export const getServerSideProps: GetServerSideProps = async () => {

// };
