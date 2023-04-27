import { useContext, useEffect } from "react";

import { useRouter } from "next/router";
import { api } from "../services/apiService";
import { destroyCookie } from "nookies";
import { UserContext } from "@/contexts/UserContext";

export const useAuth = async () => {
  async function clear() {
    destroyCookie(undefined, "vividus.token");
    await userCtx?.setUser(null);
    await localStorage.clear();
    router.reload();
  }
  const router = useRouter();
  const userCtx = useContext(UserContext);

  async function isAuthorized() {
    const localUser = localStorage.getItem("vividus.user");
    if (localUser) {
      userCtx?.setUser(JSON.parse(localUser));
    }
    try {
      const req = await api.get("/user/authorize-token");
      if (!req.data.authorized) clear();
    } catch (e) {
      clear();
    }
  }

  useEffect(() => {
    isAuthorized();
  }, []);
};
