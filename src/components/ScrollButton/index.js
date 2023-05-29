"use client";

import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <div
      onClick={scrollToTop}
      className={`${
        visible ? "block opacity-100" : "none opacity-0"
      } text-center hover:cursor-pointer fixed items-center justify-center bottom-[55px] right-[20px] bg-primary shadow-[0_1px_10px_0_#ffffff4d] text-[#fff] text-[18px] leading-[40px] px-[10px] rounded-[5px] transition-all duration-[0.2s] ease-in-out z-50 w-[40px] h-[40px] hover:text-[#000] hover:bg-[#fff] sm:hover:text-[#fff] sm:hover:bg-primary`}
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </div>
  );
};
