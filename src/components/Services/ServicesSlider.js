"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../pages/styles/globals.css";
import { useEffect, useState } from "react";

import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { ServicesSliderItem } from "./ServicesSliderItem";
import { useRef } from "react";
import { useCallback } from "react";
import { NextButton, PreviousButton } from "@/assets/icons/services";

export const ServicesSlider = ({ servicesList, locale }) => {
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);
  const [domLoaded, setDomLoaded] = useState(false);
  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div className="relative">
      {domLoaded && (
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          initialSlide={2}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={false}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper"
          ref={sliderRef}
        >
          {servicesList.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <ServicesSliderItem
                  icon={item.icon}
                  listDesc={locale === "en" ? item.listDesc : item.listDescJp}
                  title={locale === "en" ? item.title : item.titleJp}
                  key={item.id}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
      <div
        className="absolute left-[11%] top-[44%] -translate-y-1/2 z-10 hover:cursor-pointer"
        onClick={handlePrev}
      >
        <PreviousButton />
      </div>
      <div
        className="absolute right-[15%] top-[44%] -translate-y-1/2 z-10 hover:cursor-pointer"
        onClick={handleNext}
      >
        <NextButton />
      </div>
    </div>
  );
};
