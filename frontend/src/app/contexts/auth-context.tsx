import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { localStorageKeys } from "../config/localstorage-keys";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usersService } from "../services/users-services";
import toast from "react-hot-toast";
import { LaunchScreen } from "../../view/components/launch-screen";

type AuthContextParams = {
  children: ReactNode;
};
type SigninParams = {
  accessToken: string;
};

type AuthContextValue = {
  signedIn: boolean;
  signin: ({ accessToken }: SigninParams) => void;
  signout: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextValue>(
  {} as AuthContextValue
);

export const AuthProvider = ({ children }: AuthContextParams) => {
  const [signedIn, setSignedIn] = useState<boolean>(() =>
    Boolean(localStorage.getItem(localStorageKeys.ACCESS_TOKEN))
  );

  const queryClient = useQueryClient();

  const signin = useCallback(({ accessToken }: SigninParams) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);

    queryClient.removeQueries({ queryKey: ["users", "me"] });

    setSignedIn(false);
  }, [queryClient]);

  const { isError, isFetching, isSuccess } = useQuery({
    queryKey: ["users", "me"],
    queryFn: () => usersService.me(),
    enabled: signedIn,
  });

  useEffect(() => {
    if (isError) {
      toast.error("Sessão expirada, faça login novamente!");
      signout();
    }
  }, [isError, signout]);

  const values = useMemo(
    () => ({
      signedIn: isSuccess && signedIn,
      signin,
      signout,
    }),
    [isSuccess, signedIn, signin, signout]
  );

  return (
    <AuthContext.Provider value={values}>
      <LaunchScreen isLoading={isFetching} />

      {!isFetching && children}
    </AuthContext.Provider>
  );
};
