import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../../../../components/icons/transactions-icon";
import { FilterIcon } from "../../../../components/icons/filter-icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constants";
import { SliderOption } from "./slider-option";
import { SliderNavigation } from "./slider-navigation";
import { formatCurrency } from "../../../../../app/utils/format-currency";
import { CategoryIcon } from "../../../../components/icons/categories/category-icon";

export const Transactions = () => {
  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
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

          <span className="font-medium tracking-[-0.5px] text-red-800">
            {formatCurrency(-20)}
          </span>
        </div>

        <div className="bg-white rounded-2xl p-4 flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center gap-3">
            <CategoryIcon type="income" />

            <div>
              <strong className="font-bold tracking-[-0.5px] block">
                Salario
              </strong>
              <span className="text-sm text-gray-600">04/06/2026</span>
            </div>
          </div>

          <span className="font-medium tracking-[-0.5px] text-green-800">
            {formatCurrency(-20)}
          </span>
        </div>
      </div>
    </div>
  );
};
