import { AuthHeader } from "../../components/auth-header";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { useRegisterController } from "./use-register-controller";

export const Register = () => {
  const { handleSubmit, errors, register, isPending } = useRegisterController();
  return (
    <>
      <div className="flex flex-col items-center gap-16">
        <AuthHeader
          title="Crie sua conta"
          link="/login"
          linkText="Já tem uma conta?"
        />

        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <Input
            placeholder="Nome"
            error={errors.name?.message}
            {...register("name")}
          />

          <Input
            type="email"
            placeholder="E-mail"
            error={errors.email?.message}
            {...register("email")}
          />

          <Input
            type="password"
            placeholder="Senha"
            error={errors.password?.message}
            {...register("password")}
          />

          <Button type="submit" className="mt-2" loading={isPending}>
            Criar conta
          </Button>
        </form>
      </div>
    </>
  );
};
