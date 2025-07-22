import { httpClient } from "../http-client";

export interface MeResponse {
  accessToken: string;
}

export const me = async () => {
  const { data } = await httpClient.get<MeResponse>("/users/me");

  return data;
};
