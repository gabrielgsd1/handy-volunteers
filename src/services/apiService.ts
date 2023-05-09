import axios from "axios";
import * as nookies from "nookies";

export const api = axios.create({
  baseURL: process.env.API_URL,
});

api.interceptors.request.use((v) => {
  const { token } = nookies.parseCookies();

  v.headers.set("Authorization", "Bearer " + token);

  return v;
});
