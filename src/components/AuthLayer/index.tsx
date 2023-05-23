import React, { useContext, useEffect, useState } from "react";
import { api } from "@/services/apiService";
import { UserContext } from "@/contexts/UserContext";
import { useRouter } from "next/router";

function AuthLayer({ children }: { children: JSX.Element }) {
  const [authorized, setAuthorized] = useState<null | boolean>(null);
  const userCtx = useContext(UserContext);
  const router = useRouter();

  async function verifyCookies() {
    try {
      const isAuthorized = await api.get("/users/verify-token");
      if (isAuthorized.data?.user) {
        setAuthorized(true);
        userCtx?.setUser(isAuthorized.data.user);
      }
    } catch (e) {
      console.log(e);
      setAuthorized(false);
      setTimeout(() => {
        router.push("/");
      }, 500);
    }
  }

  useEffect(() => {
    verifyCookies();
  }, []);
  if (!authorized) return null;
  return <>{children}</>;
}

export default AuthLayer;
