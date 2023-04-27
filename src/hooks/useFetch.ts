import { useEffect, useState } from "react";

import { api } from "../services/apiService";
import { AxiosRequestConfig, AxiosResponse } from "axios";

interface UseFetchReturn<T = never> {
  data: T;
  state: LoadingStates;
  error: string | null;
  hasCompleted?: boolean;
  trigger: () => void;
}

type LoadingStates = "loading" | "complete" | "idle" | "error";

type HttpMethods = "GET" | "POST" | "PUT" | "DELETE";

export function useFetch<T, U = unknown>(
  method: HttpMethods,
  route: string,
  body?: U,
  options?: AxiosRequestConfig
): UseFetchReturn<T | null> {
  const [reqState, setReqState] = useState<LoadingStates>("idle");
  const [data, setData] = useState<null | T>(null);
  const [error, setError] = useState<null | string>(null);

  async function trigger(
    httpmethod?: HttpMethods,
    apiroute?: string,
    bodyObj?: U,
    axiosoptions?: AxiosRequestConfig
  ) {
    try {
      setReqState("loading");
      const res: AxiosResponse<T> = await api({
        url: apiroute || route,
        method: httpmethod || method,
        data: bodyObj || body,
        ...(axiosoptions || options),
      });
      setData(res.data);
    } catch (e: any) {
      setReqState("error");
      if (e.response) setError(e.response.data.message);
      else setError("Erro na requisição");
    } finally {
      setReqState("complete");
      setTimeout(() => setReqState("idle"), 1000);
    }
  }

  useEffect(() => {
    trigger;
  }, []);

  return {
    data,
    state: reqState,
    error,
    hasCompleted: reqState !== "loading" && !!data,
    trigger,
  };
}
