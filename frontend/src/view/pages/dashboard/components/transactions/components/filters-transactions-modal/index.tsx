import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Modal } from "../../../../../../components/modal";
import { Button } from "../../../../../../components/button";
import { useFiltersTransactionsModal } from "./use-filters-transactions-modal";
import { cn } from "../../../../../../../app/utils/cn";

type FiltersTransactionsModalProps = {
  open: boolean;
  onClose: () => void;
};

const mockedBankAccounts = [
  { id: "1", name: "Nubank" },
  { id: "2", name: "XP Investimentos" },
  { id: "3", name: "Dinheiro" },
];

export const FiltersTransactionsModal = ({
  open,
  onClose,
}: FiltersTransactionsModalProps) => {
  const {
    handleSelectBankAccountId,
    selectedBankAccountId,
    selectedYear,
    handleChangeYear,
  } = useFiltersTransactionsModal();

  return (
    <Modal open={open} title="Filtros" onClose={onClose}>
      <div>
        <span className="text-lg tracking-[-1px] font-bold text-gray-800">
          Conta
        </span>

        <div className="space-y-2 mt-2">
          {mockedBankAccounts.map(({ id, name }) => (
            <button
              className={cn(
                "p-2 rounded-2xl w-full text-left text-gray-800 hover:bg-gray-50",
                id === selectedBankAccountId && "!bg-gray-200"
              )}
              id={id}
              key={id}
              onClick={() => handleSelectBankAccountId(id)}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="mt-10 text-gray-800">
          <span className="text-lg tracking-[-1px] font-bold ">Ano</span>

          <div className="mt-2 w-52 flex items-center justify-between">
            <button
              className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 rounded-lg"
              onClick={() => handleChangeYear(-1)}
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <div className="flex-1 text-center">
              <span className="text-sm font-medium tracking-[-0.5px]">
                {selectedYear}
              </span>
            </div>

            <button
              className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 rounded-lg"
              onClick={() => handleChangeYear(1)}
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <Button className="w-full mt-10">Aplicar Filtros</Button>
    </Modal>
  );
};
