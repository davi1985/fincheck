import { httpClient } from "../http-client";

export interface SigninParams {
  email: string;
  password: string;
}

export interface SigninResponse {
  accessToken: string;
}

export const signin = async (body: SigninParams) => {
  const { data } = await httpClient.post<SigninResponse>("/auth/signin", body);

  return data;
};
