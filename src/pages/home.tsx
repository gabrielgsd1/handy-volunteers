import React from "react";
import LoggedLayout from "./_loggedInLayout";
import Link from "next/link";
import Button from "@/components/Buttons";
import AuthLayer from "@/components/AuthLayer";

function Home() {
  return (
    <AuthLayer>
      <LoggedLayout>
        <Link href="/posts/create">
          <Button>Criar Post</Button>
        </Link>
      </LoggedLayout>
    </AuthLayer>
  );
}

export default Home;
