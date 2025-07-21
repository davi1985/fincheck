import { useAuth } from "../../../app/hooks/use-auth";
import { Button } from "../../components/button";

export const Dashboard = () => {
  const { signout } = useAuth();

  return (
    <div>
      <h1>Dashboard Page</h1>

      <Button onClick={signout}>Sair</Button>
    </div>
  );
};
