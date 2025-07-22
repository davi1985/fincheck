import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./router";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./app/contexts/auth-context";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Router />
      <Toaster />
    </AuthProvider>

    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
