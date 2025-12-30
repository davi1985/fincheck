import { cn } from "../../../../../app/utils/cn";
import { formatCurrency } from "../../../../../app/utils/format-currency";
import { CategoryIcon } from "../../../../components/icons/categories/category-icon";
import { FilterIcon } from "../../../../components/icons/filter-icon";
import { Spinner } from "../../../../components/spinner";
import { EmptyTransactions } from "./components/empty-transactions";
import { MonthSlider } from "./components/month-slider";
import { useTransactionsController } from "./use-transactions-controller";
import { TransactionTypeDropdown } from "./transaction-type-dropdown";
import { FiltersTransactionsModal } from "./components/filters-transactions-modal";

export const Transactions = () => {
  const {
    areValuesVisible,
    isInitialLoading,
    transactions,
    isLoading,
    handleCloseFilterModal,
    handleOpenFilterModal,
    isFilterModalOpen,
  } = useTransactionsController();

  const hasTransactions = transactions.length > 0;

  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
      {isInitialLoading && (
        <div className="w-full h-full items-center justify-center flex">
          <Spinner className="w-10 h-10" />
        </div>
      )}

      {!isInitialLoading && (
        <>
          <FiltersTransactionsModal
            open={isFilterModalOpen}
            onClose={handleCloseFilterModal}
          />

          <header>
            <div className="flex items-center justify-between">
              <TransactionTypeDropdown />

              <button onClick={handleOpenFilterModal}>
                <FilterIcon />
              </button>
            </div>

            <div className="mt-6 relative">
              <MonthSlider />
            </div>
          </header>

          <div className="mt-4 flex-1 space-y-2 overflow-y-auto">
            {isLoading && (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <Spinner className="w-10 h-10" />
              </div>
            )}

            {(!hasTransactions || !isLoading) && <EmptyTransactions />}

            {hasTransactions && !isLoading && (
              <>
                <div className="bg-white rounded-2xl p-4 flex items-center justify-between gap-4">
                  <div className="flex-1 flex items-center gap-3">
                    <CategoryIcon type="expense" />

                    <div>
                      <strong className="font-bold tracking-[-0.5px] block">
                        Almoço
                      </strong>
                      <span className="text-sm text-gray-600">04/06/2026</span>
                    </div>
                  </div>

                  <span
                    className={cn(
                      "font-medium tracking-[-0.5px] text-red-800",
                      !areValuesVisible && "blur-sm"
                    )}
                  >
                    {formatCurrency(-20)}
                  </span>
                </div>

                <div className="bg-white rounded-2xl p-4 flex items-center justify-between gap-4">
                  <div className="flex-1 flex items-center gap-3">
                    <CategoryIcon type="income" />

                    <div>
                      <strong className="font-bold tracking-[-0.5px] block">
                        Salário
                      </strong>
                      <span className="text-sm text-gray-600">04/06/2026</span>
                    </div>
                  </div>

                  <span
                    className={cn(
                      "font-medium tracking-[-0.5px] text-green-800",
                      !areValuesVisible && "blur-sm"
                    )}
                  >
                    {formatCurrency(-20)}
                  </span>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};
