import Jobs from "@/components/Jobs/jobs";
import { UserContext } from "@/contexts/UserContext";
import { useFetch } from "@/hooks/useFetch";
import React, { useContext, useState } from "react";
import LoggedLayout from "../_loggedInLayout";
import { Post } from "@/interfaces/interfaces";
import { api } from "@/services/apiService";
import { messageError } from "@/components/Message";

function CurrentJobs() {
  const userCtx = useContext(UserContext);
  const posts = useFetch<Post[]>(
    "GET",
    `/posts/ong/current/${userCtx?.user?.Ong?.OngId}`
  );
  const [postLoading, setPostLoading] = useState<string | null>(null);

  async function handleOnFinished(post: Post) {
    try {
      setPostLoading(post.PostId);
      const markPostAsFinished = await api.get<{
        notFinishedJobs: Post[];
        finishedJob: Post;
      }>(`/posts/mark-as-complete/${post.PostId}`);

      posts.trigger({});
    } catch (e: any) {
      messageError(
        e?.response?.data?.message || "Erro ao marcar como finalizado"
      );
    } finally {
      setPostLoading(post.PostId);
    }
  }

  return (
    <LoggedLayout>
      <section className="px-12">
        <p>trabalhos atuais</p>
        {posts.data && (
          <Jobs
            postIdButtonLoading={postLoading}
            onJobFinished={handleOnFinished}
            posts={posts.data}
          />
        )}
      </section>
    </LoggedLayout>
  );
}

export default CurrentJobs;
