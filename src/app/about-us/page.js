"use client";

import { FlyIcon } from "@/assets/icons";
import { Item1, Item2, Item3 } from "@/assets/icons/about-us";
import { AgileIcon } from "@/assets/icons/about-us/agile";
import { PersonIcon } from "@/assets/icons/about-us/person";
import { SolutionsIcon } from "@/assets/icons/about-us/solutions";
import { WikiIcon } from "@/assets/icons/about-us/wiki";
import { AboutUsItem } from "@/components/AboutUs/AboutUsItem";
import { Icon } from "@/components/Icon/Icon";
import anime from "animejs";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "../../pages/styles/globals.css";
import CountUp from "react-countup";

const visionList = [
  {
    id: 1,
    icon: Item1,
    title: "Employees",
    desc: "To become a company where each employee can discover their own value through the development of products that satisfy customers.",
  },
  {
    id: 2,
    icon: Item2,
    title: "Customers",
    desc: "To become a company that will be a long-term and trusted partner beyond the barriers of different cultures and subconscious between Japan and Vietnam.",
  },
  {
    id: 3,
    icon: Item3,
    title: "Irreplaceable Partner",
    desc: "We will always by your side when you need by providing satisfaction and developing with a carefully thought.",
  },
];
const actionList = [
  {
    id: 1,
    icon: PersonIcon,
    title: "Person",
    desc: "Planning to organizing by engineers who have experience in Japan IT industry , create an organization in Japan to solve problems caused by differences in the subconscious of Japanese and Vietnamese, such as weak in understanding work, requirements, and how to do it.",
  },
  {
    id: 2,
    icon: WikiIcon,
    title: "Wiki",
    desc: "Accumulate business knowledge, technical knowledge, problem-solving knowledge while promoting the project, additionally, training in our company, increase in project promotion capabilities , well- known in business ,culture of Japan and the way in thinking ,methods of Japanese .",
  },
  {
    id: 3,
    icon: AgileIcon,
    title: "Agile",
    desc: "Apply agile or proceed of agile to project development, detect and resolve issues step by step early.",
  },
  {
    id: 4,
    icon: SolutionsIcon,
    title: "Solutions",
    desc: "Provide solutions with higher value-added and complete specification from customer specifications by making Partion Agile Wikipedia more fluently.",
  },
];

export default function AboutUsPage() {
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
    <div className="relative overflow-hidden">
      <div className="relative xl:max-w-[1440px] mx-auto">
        <div className="px-[80px] xl:max-w-[1440px] mx-auto bg-[url('/bg/about-bg.svg')] bg-no-repeat bg-auto bg-[-1%_10%]">
          <div className="flex items-center justify-center py-[88px]">
            <div className="w-1/2">
              <div className="relative bg-[url('/blue-circle.svg')] bg-no-repeat w-[288px] h-[293px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[700] text-[67px] whitespace-nowrap">
                  About us
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <h4 className="font-[600] text-[39px] leading-[48px] ">
                  01. Vision
                </h4>
                <p className="font-[400] text-[19px] leading-[32px]">
                  Our vision is to become the most delivery capability company
                  in Vietnam outsourcing industry, where each employee can
                  discover their own value through the development of products
                  that satisfy our customers.
                </p>
              </div>
              <div className="mt-[32px]">
                {visionList.map((item) => (
                  <AboutUsItem
                    key={item.id}
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center  py-[88px]">
            <div className="w-1/2">
              <h4 className="font-[600] text-[39px] leading-[48px] ">
                02. Mission
              </h4>
              <p className="font-[400] text-[19px] leading-[32px]">
                For customers we will always ensure the quality (Q), cost (C)and
                delivery date (D) with creative and innovative delivery methods.
                For our employees , we will provide an environment where highly
                mental health and a good life which enthusiastic ,creation can
                be developed.
              </p>
            </div>
            <div className="w-1/2">
              <div className="font-[400] text-[59px] leading-[78px] text-secondary flex-none order-1 flex-grow-0 w-full">
                <p className="text-left">“ We do all things</p>
                <p className="text-right">with big a heart ”</p>
              </div>
            </div>
          </div>

          <div className="flex-col items-center justify-start py-[88px]">
            <div className="w-1/2">
              <h4 className="font-[600] text-[39px] leading-[48px] ">
                03. Action
              </h4>
              <p className="font-[400] text-[19px] leading-[32px]">
                Our mains value <br /> PAWS is the person, Agile, Wikipedia,
                Solutions defined by us.
              </p>
            </div>
            <div className="w-full grid grid-cols-2 mt-[32px]">
              {actionList.map((item) => (
                <AboutUsItem
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
          <div className="bg-[url('/bg/our-performance-bg.svg')] bg-[center_center] bg-no-repeat bg-cover h-[560px] pt-[76px]">
            <h4 className="font-[600] text-[39px] leading-[48px] text-center">
              Our performance
            </h4>
            <div className="flex justify-center items-center mt-[20px]">
              <div className="">
                <div className="font-[600] text-[79px] leading-[118.5px] text-primary relative">
                  <Image
                    src="/bg/simple-icons_marketo.png"
                    className="absolute z-[-1] left-[-40%] top-[-25%]"
                    width={100}
                    height={100}
                    style={{ maxWidth: "none", width: "150%", height: "150%" }}
                  />
                  <CountUp start={0} end={10} duration={3} enableScrollSpy />+
                </div>
                <div className="text-center font-[400] text-[19px] leading-[32px] text-title">
                  Customer
                </div>
              </div>
              <div className="mx-[100px]">
                <div className="font-[600] text-[79px] leading-[118.5px] text-primary relative">
                  <Image
                    src="/bg/simple-icons_marketo.png"
                    className="absolute z-[-1] left-[-40%] top-[-25%]"
                    width={100}
                    height={100}
                    style={{ maxWidth: "none", width: "150%", height: "150%" }}
                  />
                  <CountUp start={0} end={25} duration={3} enableScrollSpy />+
                </div>
                <div className="text-center font-[400] text-[19px] leading-[32px] text-title">
                  Employees
                </div>
              </div>
              <div>
                <div className="font-[600] text-[79px] leading-[118.5px] text-primary relative">
                  <Image
                    src="/bg/simple-icons_marketo.png"
                    className="absolute z-[-1] left-[-40%] top-[-25%]"
                    width={100}
                    height={100}
                    style={{ maxWidth: "none", width: "150%", height: "150%" }}
                  />
                  <CountUp start={0} end={15} duration={3} enableScrollSpy />+
                </div>
                <div className="text-center font-[400] text-[19px] leading-[32px] text-title">
                  Projects
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-start px-[88px] mt-[96px]">
            <div className="w-1/2">
              <h4 className="font-[600] text-[39px] leading-[49px]">
                WE PROMIES TO BRING
              </h4>
              <p className="font-[400] text-[27px] leading-[32px] mt-10">
                Core Value <br /> ZenS promise to following those things.
              </p>
            </div>
            <div className="w-1/2 ml-[156px]">
              <div className="pl-[32px] mb-[42px] font-[400] text-[13px] leading-[20px] relative before:rounded-full before:top-1/2 before:-translate-y-1/2 before:absolute before:left-0 before:content-[''] before:w-[16px] before:h-[16px] before:bg-primary">
                Appreciate customer time and response quickly.
              </div>
              <div className="pl-[32px] mb-[42px] font-[400] text-[13px] leading-[20px] relative before:rounded-full before:top-1/2 before:-translate-y-1/2 before:absolute before:left-0 before:content-[''] before:w-[16px] before:h-[16px] before:bg-primary">
                Understand our customer and emphasis on the result.
              </div>
              <div className="pl-[32px] mb-[42px] font-[400] text-[13px] leading-[20px] relative before:rounded-full before:top-1/2 before:-translate-y-1/2 before:absolute before:left-0 before:content-[''] before:w-[16px] before:h-[16px] before:bg-primary">
                Continue to response until you are satisfied.
              </div>
              <div className="pl-[32px] mb-[42px] font-[400] text-[13px] leading-[20px] relative before:rounded-full before:top-1/2 before:-translate-y-1/2 before:absolute before:left-0 before:content-[''] before:w-[16px] before:h-[16px] before:bg-primary">
                Provide appropriate service which focus on humans, Technologies
                and process.
              </div>
            </div>
          </div>
        </div>
        <svg
          width="1440"
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
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="20 20"
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
              <stop offset="0.237279" stop-color="#42A7C3" />
              <stop offset="1" stop-color="#8ADBF0" stop-opacity="0.54" />
            </linearGradient>
          </defs>
        </svg>
        <Icon className="top-[-16.3%] left-[-1%] z-[-1]" id="fly">
          <FlyIcon width={32} height={38} />
        </Icon>
      </div>
    </div>
  );
}
