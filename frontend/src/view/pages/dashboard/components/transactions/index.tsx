import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constants";
import { cn } from "../../../../../app/utils/cn";
import { formatCurrency } from "../../../../../app/utils/format-currency";
import { CategoryIcon } from "../../../../components/icons/categories/category-icon";
import { FilterIcon } from "../../../../components/icons/filter-icon";
import { TransactionsIcon } from "../../../../components/icons/transactions-icon";
import { SliderNavigation } from "./slider-navigation";
import { SliderOption } from "./slider-option";
import { useTransactionsController } from "./use-transactions-controller";
import { Spinner } from "../../../../components/spinner";
import emptyStateIllustration from "../../../../../assets/empty-state.svg";

export const Transactions = () => {
  const { areValuesVisible, isInitialLoading, transactions, isLoading } =
    useTransactionsController();

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
          <header>
            <div className="flex items-center justify-between">
              <button className="flex items-center gap-2">
                <TransactionsIcon />
                <span className="text-sm text-gray-800 font-medium tracking-[-0.5px]">
                  Transações
                </span>
                <ChevronDownIcon className="text-gray-900" />
              </button>

              <button>
                <FilterIcon />
              </button>
            </div>

            <div className="mt-6 relative">
              <Swiper centeredSlides grabCursor slidesPerView={3}>
                <SliderNavigation />

                {MONTHS.map((month, index) => (
                  <SwiperSlide key={month}>
                    {({ isActive }) => (
                      <SliderOption
                        isActive={isActive}
                        month={month}
                        index={index}
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </header>

          <div className="mt-4 flex-1 space-y-2 overflow-y-auto">
            {isLoading && (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <Spinner className="w-10 h-10" />
              </div>
            )}

            {(!hasTransactions || !isLoading) && (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <img
                  src={emptyStateIllustration}
                  alt="Ilustração de estado vazio"
                />
                <p className="text-gray-700">
                  Não encontramos nenhuma transação!
                </p>
              </div>
            )}

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
