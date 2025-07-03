import { httpClient } from "../http-client";

export interface SignupParams {
  name: string;
  email: string;
  password: string;
}

export interface SignupResponse {
  accessToken: string;
}

export const signup = async (body: SignupParams) => {
  const { data } = await httpClient.post<SignupResponse>("/auth/signup", body);

  return data;
};
