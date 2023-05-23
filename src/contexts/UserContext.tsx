import { User } from "@/interfaces/interfaces";
import { api } from "@/services/apiService";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import nookies from "nookies";
import { useRouter } from "next/router";

interface UserContextProps {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  signIn: ({ email, password }: { email: string; password: string }) => any;
  signOut: () => any;
}

export const UserContext = createContext<UserContextProps | null>(null);

export function UserProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  async function signIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const res = await api.post<{ user: User; token: string }>("/users/login", {
      email,
      password,
    });
    console.log(res.data);
    setUser(res.data.user);
    nookies.set(null, "token", res.data.token, { SameSite: "none" });

    return { authorized: true };
  }

  function signOut() {
    nookies.destroy(undefined, "token");
    router.reload();
  }

  return (
    <UserContext.Provider value={{ user, setUser, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
}
