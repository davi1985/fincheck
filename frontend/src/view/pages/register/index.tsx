import { AuthHeader } from "../../components/auth-header";
import { Button } from "../../components/button";
import { Input } from "../../components/input";

export const Register = () => (
  <>
    <div className="flex flex-col items-center gap-16">
      <AuthHeader
        title="Crie sua conta"
        link="/login"
        linkText="Já tem uma conta?"
      />

      <form className="flex flex-col gap-4 w-full">
        <Input placeholder="Nome" name="name" />
        <Input type="email" placeholder="E-mail" name="email" />
        <Input type="password" placeholder="Senha" name="password" />

        <Button type="submit" className="mt-2">
          Criar conta
        </Button>
      </form>
    </div>
  </>
);
