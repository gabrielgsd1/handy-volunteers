import { User } from "@/interfaces/interfaces";
import { api } from "@/services/apiService";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import * as nookies from "nookies";

interface UserContextProps {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  signIn: ({ email, password }: { email: string; password: string }) => any;
}

export const UserContext = createContext<UserContextProps | null>(null);

export function UserProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<User | null>(null);

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
    nookies.setCookie(null, "token", res.data.token);

    return { authorized: true };
  }

  return (
    <UserContext.Provider value={{ user, setUser, signIn }}>
      {children}
    </UserContext.Provider>
  );
}
