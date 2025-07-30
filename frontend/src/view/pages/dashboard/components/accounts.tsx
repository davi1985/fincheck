import "swiper/css";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { EyeIcon } from "../../../components/icons/eye-icon";
import { AccountCard } from "./account-card";
import { formatCurrency } from "../../../../app/utils/format-currency";

import { SwiperSlide, Swiper } from "swiper/react";
import { AccountsSliderNavigation } from "./accounts-slider-navigation";

export const Accounts = () => {
  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
      <div>
        <span className="text-white tracking-[-0.5px] block">Saldo total</span>

        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px] text-white">
            {formatCurrency(1000.0)}
          </strong>

          <button className="w-8 h-8 flex items-center justify-center rounded-2xl">
            <EyeIcon open />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end">
        <div>
          <Swiper spaceBetween={16} slidesPerView={2.15}>
            <div
              className="flex items-center justify-between mb-4"
              slot="container-start"
            >
              <strong className="text-white tracking-[-1px] text-lg">
                Minhas contas
              </strong>

              <AccountsSliderNavigation />
            </div>

            <SwiperSlide>
              <AccountCard
                color="#7950f2"
                name="Nubank"
                balance={1000.23}
                type="CHECKING"
              />
            </SwiperSlide>
            <SwiperSlide>
              <AccountCard
                color="#323232"
                name="XP"
                balance={1000.23}
                type="INVESTMENT"
              />
            </SwiperSlide>

            <SwiperSlide>
              <AccountCard
                color="#0F0"
                name="Carteira"
                balance={1000.23}
                type="CASH"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
