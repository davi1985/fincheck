import { z } from "zod";

export const schema = z.object({
  name: z.string().nonempty("Nome é obrigatório"),
  email: z
    .string()
    .nonempty("E-mail é obrigatório")
    .email("Informe um e-mail válido"),
  password: z
    .string()
    .nonempty("Senha é obrigatório")
    .min(8, "Senha der conter pelo menos 8 dígitos"),
});

export type FormData = z.infer<typeof schema>;
