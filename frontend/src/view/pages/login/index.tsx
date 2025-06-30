import { AuthHeader } from "../../components/auth-header";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

export const Login = () => (
  <div className="flex flex-col items-center gap-16">
    <AuthHeader
      title="Entre em sua conta"
      link="/register"
      linkText="Crie uma conta"
    />

    <form className="flex flex-col gap-4 w-full">
      <Input type="email" placeholder="Email" name="email" />
      <Input type="password" placeholder="Senha" name="password" />

      <Button type="submit" className="mt-2">
        Entrar
      </Button>
    </form>
  </div>
);
