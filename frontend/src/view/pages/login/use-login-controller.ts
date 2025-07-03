import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { authService } from "../../../app/services/auth-service";
import type { SigninParams } from "../../../app/services/auth-service/signin";
import { schema, type FormData } from "./schema";
import toast from "react-hot-toast";

export const useLoginController = () => {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["signin"],
    mutationFn: async (data: SigninParams) => authService.signin(data),
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      console.log({ accessToken });
    } catch {
      toast.error("Credenciais inválidas");
    }
  });

  return { handleSubmit, register, errors, isPending };
};
