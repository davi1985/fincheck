import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constants";
import { SliderNavigation } from "./slider-navigation";
import { SliderOption } from "./slider-option";

export const MonthSlider = () => (
  <Swiper centeredSlides grabCursor slidesPerView={3}>
    <SliderNavigation />

    {MONTHS.map((month, index) => (
      <SwiperSlide key={month}>
        {({ isActive }) => (
          <SliderOption isActive={isActive} month={month} index={index} />
        )}
      </SwiperSlide>
    ))}
  </Swiper>
);
