import { Ong } from "@/interfaces/interfaces";
import { api } from "@/services/apiService";
import { GetServerSideProps } from "next";

import React from "react";

interface OngProps {
  ong: Ong;
}

function Ong({ ong }: OngProps) {
  return <pre>{JSON.stringify(ong, undefined, 1)}</pre>;
}
export default Ong;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const ong_id = ctx.params?.ong_id;

  const ong = await api.get<Ong>(`/ong/${ong_id}`);

  console.log(ong.data);

  return {
    props: {
      ong: ong.data,
    },
  };
};
