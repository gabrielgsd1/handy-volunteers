import React, { useContext, useEffect, useState } from "react";
import { api } from "@/services/apiService";
import { UserContext } from "@/contexts/UserContext";

function AuthLayer({ children }: { children: JSX.Element }) {
  const [authorized, setAuthorized] = useState<null | boolean>(null);
  const userCtx = useContext(UserContext);

  async function verifyCookies() {
    try {
      console.log(authorized);
      const isAuthorized = await api.get("/users/verify-token");
      console.log(isAuthorized.data);
      if (isAuthorized.data?.user) {
        setAuthorized(true);
        userCtx?.setUser(isAuthorized.data.user);
      }
    } catch (e) {
      console.log(e);
      setAuthorized(false);
    }
  }

  useEffect(() => {
    verifyCookies();
  }, []);
  if (!authorized) return null;
  return <>{children}</>;
}

export default AuthLayer;
