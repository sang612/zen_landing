"use client";
import { Icon } from "../Icon/Icon";
import Image from "next/image";
import anime from "animejs";
import { useEffect, useRef } from "react";
import {
  Gear5Icon,
  Gear6Icon,
  Gear7Icon,
  MapPinIcon,
  PhoneIcon,
} from "@/assets/icons";
import { Header } from "./Header";

export const Banner2 = ({ animationsStarted, hideElement, setOpenMobileNav, setOpen }) => {
  const animationRef = useRef(null);
  useEffect(() => {
    if (animationsStarted) {
      animationRef.current = anime({
        targets: ".first-image",
        translateX: ["-100%", "0%"],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2000,
      });
      animationRef.current = anime({
        targets: ".second-image",
        translateX: ["100%", "0%"],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2000,
        complete: () => {
          animationRef.current = anime({
            targets: ".text-animate",
            opacity: [1],
            easing: "easeOutExpo",
            duration: 2000,
          });
        },
      });
    } else {
      hideElement(".first-image", "one");
      hideElement(".second-image", "one");
      hideElement(".text-animate", "all");
      anime.remove(".first-image");
      anime.remove(".second-image");
      anime.remove(".text-animate");
    }
  }, [animationsStarted]);

  return (
    <div className="bg-gradient-to-b from-[#E2F6FC] min-h-[804px] w-full relative ">
      <div className="relative xl:max-w-[1440px] mx-auto">
        <Header setOpenMobileNav={setOpenMobileNav} setOpen={setOpen} />
        <div className="-z-10">
          <Icon className="top-[141.27px] left-[929px]">
            <Gear5Icon width={68.1} height={79.65} />
          </Icon>
          <Icon className="top-[155.43px] left-[980.99px]">
            <Gear6Icon width={116.39} height={136.08} />
          </Icon>

          <Icon className="top-[200.17px] left-[1092.28px]">
            <Gear7Icon width={69.08} height={80.78} />
          </Icon>
        </div>

        <div>
          <div className="z-10 sm:z-0 absolute sm:relative top-0 left-0">
            <div>
              <Image
                src="/jp_bulding.svg"
                width="0"
                height="0"
                sizes="100vw"
                className="w-[923px] h-[655px] sm:h-auto first-image opacity-0"
                alt="jp_bulding"
              />
            </div>
            <div className="mt-[16px] ml-[40px] sm:ml-0 text-animate opacity-0 sm:pl-[40px] sm:mt-0">
              <h4 className="font-[600] text-[16px] leading-[28px] tracking-[0.015em]">
                Japan
              </h4>
              <div className="mt-[12px]">
                <div className="flex flex-row items-center">
                  <MapPinIcon width={20} height={20} />
                  <h5 className="font-[400] text-[14px] leading-[20px] ml-[12px] text-[#707172]">
                    〒110-0005 東京都台東区上野7丁目3-9アルベルゴ上野511
                  </h5>
                </div>
                <div className="flex flex-row items-center mt-[8px]">
                  <PhoneIcon width={20} height={20} />
                  <h5 className="font-[400] text-[14px] leading-[20px] ml-[12px] text-[#707172]">
                    03-6231-7256
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="z-0 absolute sm:relative top-[136px] sm:top-[10px] right-0 sm:flex-col-reverse sm:flex">
            <div className="max-w-[437px] ml-auto mr-[40px] mb-[16px] text-animate opacity-0 sm:pl-[40px]">
              <h4 className="font-[600] text-[16px] leading-[28px] tracking-[0.015em]">
                Viet Nam:
              </h4>
              <div className="mt-[12px]">
                <div className="flex flex-row items-center">
                  <MapPinIcon width={20} height={20} />
                  <h5 className="font-[400] text-[14px] leading-[20px] ml-[12px] text-[#707172]">
                    No. 59, Road 06, Cityland Park Hills, 10, Go Vap, Ho Chi
                    Minh
                  </h5>
                </div>
                <div className="flex flex-row items-center mt-[8px]">
                  <PhoneIcon width={20} height={20} />
                  <h5 className="font-[400] text-[14px] leading-[20px] ml-[12px] text-[#707172]">
                    0974-497-631
                  </h5>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/cityland.svg"
                width="0"
                height="0"
                sizes="100vw"
                className="w-[640px] h-[495px] sm:h-auto second-image opacity-0"
                alt="cityland"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
