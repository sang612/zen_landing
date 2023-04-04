import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ServicesSliderItem } from "./ServicesSliderItem";
import { useState } from "react";

export const ServicesSlider = ({ servicesList }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    autoplay: false,
    pauseOnHover: true,
    pauseOnFocus: false,
    autoplaySpeed: 1000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "33%",
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  return (
      <Slider {...settings} className="min-h-[540px]">
        {servicesList.map((item, index) => {
          return (
            <ServicesSliderItem
              icon={item.icon}
              listDesc={item.listDesc}
              title={item.title}
              isCurrent={currentSlide === index}
              key={item.id}
            />
          );
        })}
      </Slider>
  );
};
