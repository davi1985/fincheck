import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema, type FormData } from "./schema";
import { authService } from "../../../app/services/auth-service";
import { useMutation } from "@tanstack/react-query";
import type { SignupParams } from "../../../app/services/auth-service/signup";
import toast from "react-hot-toast";

export const useRegisterController = () => {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["signup"],
    mutationFn: async (data: SignupParams) => authService.signup(data),
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      console.log({ accessToken });
      toast.success("Conta criada com sucesso!");
    } catch {
      toast.error("Ocorreu um erro ao criar sua conta.");
    }
  });

  return { handleSubmit, errors, register, isPending };
};
