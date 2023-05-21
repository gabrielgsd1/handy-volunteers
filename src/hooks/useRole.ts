import { UserContext } from "@/contexts/UserContext";
import { useRouter } from "next/router";
import { useContext } from "react";

export function useRole(role: string | string[]) {
  const router = useRouter();
  const userCtx = useContext(UserContext);

  if (typeof role === "string") {
    if (!userCtx) return router.push("/");
    if (!userCtx.user?.RoleId) {
    }
  }
}
