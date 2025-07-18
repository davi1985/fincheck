import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./router";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./app/contexts/auth-context";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Router />

      <Toaster />
    </AuthProvider>
  </QueryClientProvider>
);
