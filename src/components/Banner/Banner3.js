"use client";
import { Icon } from "../Icon/Icon";
import Image from "next/image";
import anime from "animejs";
import { useEffect, useRef } from "react";
import {
  SIcon,
  Circle6Icon,
  Gear1Icon,
  Gear2Icon,
  Gear3Icon,
  Gear4Icon,
  CSSIcon,
  BraceIcon,
  HTMLIcon,
  Circle1Icon,
  Gear5Icon,
  Gear6Icon,
  Gear7Icon,
  JavaIcon,
  PHPIcon,
  Circle2Icon,
  Circle3Icon,
  Circle4Icon,
  JSIcon,
  DivIcon,
  Circle7Icon,
  Circle8Icon,
  Circle9Icon,
  LoadingIcon,
  ZIcon,
  EIcon,
  NIcon,
  DotIcon,
  ExplainationIcon,
  Circle5Icon,
  Circle10Icon,
  MapPinIcon,
  PhoneIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  YoutubeIcon,
  GlobalIcon,
} from "@/assets/icons";
import { Header } from "./Header";

export const Banner3 = () => {
  return (
    <div className="bg-gradient-to-b from-[#E2F6FC] h-[804px] w-full relative overflow-hidden">
      <Header showLogo showButtonGroup />

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

      <div className="absolute top-0 left-0 w-full">
        <Image
          src="/banner3.svg"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          alt="banner3"
        />
      </div>
    </div>
  );
};
