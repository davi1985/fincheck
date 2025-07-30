import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

export const AccountsSliderNavigation = () => {
  const swiper = useSwiper();

  return (
    <div>
      <button
        className="disabled:opacity-40 py-3 pl-2.5 pr-3.5 rounded-2xl enabled:hover:bg-black/10 transition-colors"
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeftIcon className="text-white w-6 h-6" />
      </button>

      <button
        className="disabled:opacity-40 py-3 pl-2.5 pr-3.5 rounded-2xl enabled:hover:bg-black/10 transition-colors"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRightIcon className="text-white w-6 h-6" />
      </button>
    </div>
  );
};
