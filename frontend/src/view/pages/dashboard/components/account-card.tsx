import { formatCurrency } from "../../../../app/utils/format-currency";
import { BankAccountTypeIcon } from "../../../components/icons/bank-account-type-icon";

type AccountCardProps = {
  color: string;
  name: string;
  balance: number;
  type: "CASH" | "CHECKING" | "INVESTMENT";
};

export const AccountCard = ({
  name,
  color,
  balance,
  type,
}: AccountCardProps) => {
  return (
    <div
      className="p-4 bg-white rounded-2xl h-[200px] flex flex-col justify-between border-b-4 border-teal-950"
      style={{ borderColor: color }}
    >
      <div className="">
        <BankAccountTypeIcon type={type} />

        <span className="text-gray-800 font-medium tracking-[-0.5px] mt-4 block">
          {name}
        </span>
      </div>

      <div>
        <span className="text-gray-800 font-medium tracking-[-0.5px] block">
          {formatCurrency(balance)}
        </span>

        <small className="text-gray-600 text-sm">Saldo atual</small>
      </div>
    </div>
  );
};
