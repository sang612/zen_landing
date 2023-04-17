"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Banner4 } from "../Banner/Banner4";
import { Banner } from "../Banner/Banner";
import { Banner2 } from "../Banner/Banner2";
import { Banner3 } from "../Banner/Banner3";
import { useCallback, useRef, useState } from "react";

const settings = {
	dots: false,
	infinite: true,
	autoplay: true,
	pauseOnHover: false,
	pauseOnFocus: false,
	autoplaySpeed: 6000,
	speed: 1000,
	slidesToShow: 1,
	slidesToScroll: 1,
};
const hideElement = (value, type) => {
	if (type === "one") {
		const input =
			typeof document !== "undefined" && document.querySelector(value);
		if (input) input.style.opacity = 0;
	} else {
		const input =
			typeof document !== "undefined" && document.querySelectorAll(value);
		if (input) {
			for (let i = 0; i < input.length; i++) {
				input[i].style.opacity = 0;
			}
		}
	}
};

export const BigHeader = () => {
	const [firstBannerAnimationsStarted, setFirstBannerAnimationsStarted] =
		useState(false);
	const [animationsStarted, setAnimationsStarted] = useState(false);

	const parentSlickRef = useRef(null);
	const childSlickRef = useRef(null);

	const handleBeforeChange = useCallback(() => {
		if (childSlickRef.current && childSlickRef.current.innerSlider) {
			const target = childSlickRef.current.innerSlider.list;
			if (target && target.closest(".slick-list")) {
				return false;
			}
		}
	}, []);

	const handleAfterChange = (currentSlide) => {
		switch (currentSlide) {
			case 0:
				setFirstBannerAnimationsStarted(true);
				setAnimationsStarted(false);
				break;
			case 1:
				setFirstBannerAnimationsStarted(false);
				setAnimationsStarted(true);
				break;
			case 2:
				setFirstBannerAnimationsStarted(false);
				setAnimationsStarted(false);
				break;
			case 3:
				setFirstBannerAnimationsStarted(false);
				setAnimationsStarted(false);
				break;
			default:
				setAnimationsStarted(false);
				setFirstBannerAnimationsStarted(false);
				break;
		}
	};

	return (
		<Slider
			{...settings}
			afterChange={handleAfterChange}
			ref={parentSlickRef}
			beforeChange={handleBeforeChange}
			className="overflow-hidden"
		>
			<Banner
				firstBannerAnimationsStarted={firstBannerAnimationsStarted}
				setFirstBannerAnimationsStarted={setFirstBannerAnimationsStarted}
				hideElement={hideElement}
			/>
			<Banner2
				animationsStarted={animationsStarted}
				hideElement={hideElement}
			/>
			<Banner3 />
			<Banner4 beforeChange={handleBeforeChange} slickRef={childSlickRef} />
		</Slider>
	);
};
