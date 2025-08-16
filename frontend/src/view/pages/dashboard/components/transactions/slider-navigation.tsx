import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

export const SliderNavigation = () => {
  const swiper = useSwiper();

  return (
    <>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r flex items-center justify-center z-10 from-gray-100 to-transparent"
        onClick={() => swiper.slidePrev()}
        disabled={swiper.isBeginning}
      >
        <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
      </button>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2  w-12 h-12 bg-gradient-to-l flex items-center justify-center z-10 from-gray-100 to-transparent"
        onClick={() => swiper.slideNext()}
        disabled={swiper.isEnd}
      >
        <ChevronRightIcon className="w-6 h-6 text-gray-800" />
      </button>
    </>
  );
};
