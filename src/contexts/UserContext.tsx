import { User } from "@/interfaces/interfaces";
import { api } from "@/services/apiService";
import { Dispatch, SetStateAction, createContext, useState } from "react";

interface UserContextProps {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
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
    const res = await api.post("/user/login", {
      email,
      password,
    });
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
