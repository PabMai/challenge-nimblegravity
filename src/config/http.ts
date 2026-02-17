import { AxiosHttpClient } from "@/common/http/axios-http-client";
import { Env } from "./envs";

export const httpClient = new AxiosHttpClient(Env.BASE_URL).getAxiosInstance();