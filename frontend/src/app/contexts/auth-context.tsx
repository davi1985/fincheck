import { createContext, type ReactNode } from "react";

interface AuthContextValue {
  signedIn: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextValue>(
  {} as AuthContextValue
);

export const AuthProvider = ({ children }: { children: ReactNode }) => (
  <AuthContext.Provider value={{ signedIn: true }}>
    {children}
  </AuthContext.Provider>
);
