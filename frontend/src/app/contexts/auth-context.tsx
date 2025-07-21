import {
  createContext,
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { localStorageKeys } from "../config/localstorage-keys";

type SigninParams = {
  accessToken: string;
};

interface AuthContextValue {
  signedIn: boolean;
  signin: ({ accessToken }: SigninParams) => void;
  signout: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextValue>(
  {} as AuthContextValue
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [signedIn, setSignedIn] = useState<boolean>(() =>
    Boolean(localStorage.getItem(localStorageKeys.ACCESS_TOKEN))
  );

  const signin = useCallback(({ accessToken }: SigninParams) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    setSignedIn(false);
  }, []);

  const values = useMemo(
    () => ({
      signedIn,
      signin,
      signout,
    }),
    [signedIn, signin, signout]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
