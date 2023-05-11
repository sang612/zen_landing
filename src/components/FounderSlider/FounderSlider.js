import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FounderSliderItem } from "./FounderSliderItem";

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  pauseOnHover: true,
  pauseOnFocus: false,
  autoplaySpeed: 3000,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

export const FounderSlider = ({ beforeChange }) => (
  <div>
    <Slider {...settings} beforeChange={beforeChange}>
      <FounderSliderItem
        src="/feature-image4.svg"
        name="Hoang Khac Hung"
        desc="CEO"
      />
      <FounderSliderItem
        src="/feature-image1.svg"
        name="Dang Quoc Dat"
        desc="COO"
      />
      <FounderSliderItem
        src="/feature-image2.svg"
        name="Pham Thi Phuong"
        desc="CDO"
      />
    </Slider>
  </div>
);
