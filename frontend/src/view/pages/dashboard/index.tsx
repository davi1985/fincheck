import { Logo } from "../../components/logo";
import { UserMenu } from "../../components/user-menu";
import { Accounts } from "./components/accounts";
import { Transactions } from "./components/transactions";

export const Dashboard = () => {
  return (
    <div className="h-full w-full p-4 md:px-8 md:pb-8 md:pt-6 flex flex-col gap-4">
      <header className="h-12 flex items-center justify-between">
        <Logo className="h-6 text-teal-900" />
        <UserMenu />
      </header>

      <main className="flex-1 flex gap-4 flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <Accounts />
        </div>
        <div className="w-full md:w-1/2">
          <Transactions />
        </div>
      </main>
    </div>
  );
};
