import React, { useContext } from "react";
import LoggedLayout from "./_loggedInLayout";
import Link from "next/link";
import Button from "@/components/Buttons";
import AuthLayer from "@/components/AuthLayer";
import { UserContext } from "@/contexts/UserContext";
import Assistant from "./assistant";
import OngHomePage from "./ong";

function Home() {
  const userCtx = useContext(UserContext);

  const role = userCtx?.user?.Role.Name;

  const roleMapping = {
    Assistant: <Assistant />,
    Ong: <OngHomePage />,
  };

  return (
    <AuthLayer>
      <LoggedLayout>
        {roleMapping[role || ""]}
        {/* <Link href="/posts/create">
          <Button>Criar Post</Button>
        </Link> */}
      </LoggedLayout>
    </AuthLayer>
  );
}

export default Home;
