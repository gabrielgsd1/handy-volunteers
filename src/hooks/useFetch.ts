import { useEffect, useState } from "react";

import { api } from "../services/apiService";
import { AxiosRequestConfig, AxiosResponse } from "axios";

interface UseFetchReturn<T = never> {
  data: T;
  state: LoadingStates;
  error: string | null;
  hasCompleted?: boolean;
  trigger: (options: { route?: string; body?: any; query?: any }) => void;
  isLoading: boolean;
}

type LoadingStates = "loading" | "complete" | "idle" | "error";

type HttpMethods = "GET" | "POST" | "PUT" | "DELETE";

export function useFetch<T, U = unknown>(
  method: HttpMethods,
  route: string,
  body?: U | null,
  callOnlyOnTrigger?: boolean,
  options?: AxiosRequestConfig
): UseFetchReturn<T | null> {
  const [reqState, setReqState] = useState<LoadingStates>("idle");
  const [data, setData] = useState<null | T>(null);
  const [error, setError] = useState<null | string>(null);

  async function trigger(options?: {
    route?: string;
    body?: any;
    query?: any;
  }) {
    if (route.endsWith("null") || route.endsWith("undefined")) return;
    try {
      setReqState("loading");
      const res: AxiosResponse<T> = await api({
        url: options?.route || route,
        method: method,
        data: options?.body || body,
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
    if (!callOnlyOnTrigger) trigger();
  }, [route]);

  return {
    data,
    state: reqState,
    isLoading: reqState === "loading",
    error,
    hasCompleted: reqState !== "loading" && !!data,
    trigger,
  };
}
