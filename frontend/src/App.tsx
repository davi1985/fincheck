import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./router";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <Router />

    <Toaster />
  </QueryClientProvider>
);
