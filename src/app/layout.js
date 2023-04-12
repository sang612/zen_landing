"use client";
import { FlyIcon } from "@/assets/icons";
import { BigHeader } from "@/components/BigHeader/BigHeader";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon/Icon";
import { Navbar } from "@/components/Navbar";
import anime from "animejs";
import { useEffect, useRef, useState } from "react";

export default function RootLayout({ children }) {
  const [stickyClass, setStickyClass] = useState("relative h-[32px]");

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 800
        ? setStickyClass(
            "fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-[#fff] w-full p-5 h-[100px] shadow-sm"
          )
        : setStickyClass("relative h-[32px]");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const flyAnimationRef = useRef(null);
  useEffect(() => {
    let line_path = anime.path("#fly-path");
    flyAnimationRef.current = anime({
      targets: "#fly",
      translateX: line_path("x"),
      translateY: line_path("y"),
      rotate: line_path("angle"),
      easing: "linear",
      duration: 15000,
      loop: true,
      direction: "reverse",
    });
  }, []);

  return (
    <html>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <BigHeader />
        <div className="relative xl:max-w-[1440px] mx-auto">
          <Navbar className={stickyClass} />
          {children}
          <svg
            width="100%"
            height="1323"
            viewBox="0 0 1440 1323"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", top: "-15.5%", zIndex: -1 }}
          >
            <path
              id="fly-path"
              opacity="0.7"
              d="M1627.28 256.5C1367.78 299 1177.68 -45.2971 951.777 6.4999C692.277 65.9997 642.327 566.125 611.777 890.5C567.277 1363 -7.22266 1484.5 -103.223 1069.5C-155.039 845.5 -103.223 586.5 181.277 631.5C472.007 677.486 1482.78 688.5 1600.78 958"
              stroke="url(#paint0_linear_116_1781)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="20 20"
            />
            <defs>
              <linearGradient
                id="paint0_linear_116_1781"
                x1="623.777"
                y1="1276"
                x2="1005.48"
                y2="-206.354"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.237279" stopColor="#42A7C3" />
                <stop offset="1" stopColor="#8ADBF0" stopOpacity="0.54" />
              </linearGradient>
            </defs>
          </svg>
          <Icon className="top-[-16.3%] left-[-1%] z-[-1]" id="fly">
            <FlyIcon width={32} height={38} />
          </Icon>
        </div>
        <Footer />
      </body>
    </html>
  );
}
