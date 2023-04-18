"use client";
import { Icon } from "../Icon/Icon";
import { Gear5Icon, Gear6Icon, Gear7Icon } from "@/assets/icons";
import { FounderSlider } from "../FounderSlider/FounderSlider";
import { Header } from "./Header";

export const Banner4 = ({ beforeChange, slickRef, setOpenMobileNav, setOpen }) => {
  return (
    <div className="bg-gradient-to-b from-[#E2F6FC] h-[804px] w-full relative overflow-hidden">
      <div className="relative xl:max-w-[1440px] mx-auto">
        <Header showLogo setOpenMobileNav={setOpenMobileNav} setOpen={setOpen} />
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
        <div
          className="mt-[182px] sm:ml-0 ml-[80px]"
          onMouseDown={(event) => event?.stopPropagation()}
          ref={slickRef}
        >
          <FounderSlider beforeChange={beforeChange} />
        </div>
      </div>
    </div>
  );
};
