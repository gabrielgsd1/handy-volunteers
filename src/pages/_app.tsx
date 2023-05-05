import { UserProvider } from "@/contexts/UserContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Message from "@/components/Message";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <>
        <Message />
        <Component {...pageProps} />
      </>
    </UserProvider>
  );
}
