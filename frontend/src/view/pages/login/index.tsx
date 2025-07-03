import { AuthHeader } from "../../components/auth-header";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { useLoginController } from "./use-login-controller";

export const Login = () => {
  const { handleSubmit, register, errors, isPending } = useLoginController();

  return (
    <div className="flex flex-col items-center gap-16">
      <AuthHeader
        title="Entre em sua conta"
        link="/register"
        linkText="Crie uma conta"
      />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <Input
          type="email"
          placeholder="Email"
          {...register("email")}
          error={errors.email?.message}
        />

        <Input
          type="password"
          placeholder="Senha"
          {...register("password")}
          error={errors.password?.message}
        />

        <Button type="submit" className="mt-2" loading={isPending}>
          Entrar
        </Button>
      </form>
    </div>
  );
};
