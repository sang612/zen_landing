"use client";

import { Item1, Item2, Item3 } from "@/assets/icons/about-us";
import { AgileIcon } from "@/assets/icons/about-us/agile";
import { PersonIcon } from "@/assets/icons/about-us/person";
import { SolutionsIcon } from "@/assets/icons/about-us/solutions";
import { WikiIcon } from "@/assets/icons/about-us/wiki";
import { AboutUsItem } from "@/components/AboutUs/AboutUsItem";
import Image from "next/image";
import "../../pages/styles/globals.css";
import CountUp from "react-countup";
import "wowjs/css/libs/animate.css";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

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
  let delay = 0.2;
  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs");
      new WOW.WOW({
        live: false,
      }).init();
    }
  }, []);

  const t = useTranslations("AboutUs");

  return (
    <div className="relative overflow-hidden">
      <div className="relative xl:max-w-[1440px] mx-auto">
        <div className="lg:px-[40px] px-[80px] xl:max-w-[1440px] mx-auto bg-[url('/bg/about-bg.svg')] bg-no-repeat bg-auto bg-[-1%_10%]">
          <div className="lg:flex-col flex flex-wrap items-center justify-center py-[88px] lg:py-[20px]">
            <div className="lg:w-full w-1/2">
              <div className="lg:mx-auto relative bg-[url('/blue-circle.svg')] bg-no-repeat w-[288px] h-[293px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[700] text-[67px] whitespace-nowrap">
                  {t("AboutUs")}
                </div>
              </div>
            </div>
            <div className="lg:w-full w-1/2">
              <div>
                <h4 className="font-[600] text-[39px] leading-[48px] ">
                  01. {t("Vision")}
                </h4>
                <p className="font-[400] text-[19px] lg:text-[13px] leading-[32px]">
                  {t("VisionDesc")}
                </p>
              </div>
              <div className="mt-[32px]">
                {visionList.map((item) => {
                  const itemDelay = `${delay}s`;
                  delay += 0.2;

									return (
										<AboutUsItem
											key={item.id}
											icon={item.icon}
											title={item.title}
											desc={item.desc}
											delay={itemDelay}
										/>
									);
								})}
							</div>
						</div>
					</div>
					<div className="lg:flex-col flex items-center justify-center py-[88px] lg:py-[20px]">
						<div className="lg:w-full w-1/2">
							<h4 className="font-[600] text-[39px] leading-[48px] lg:mt-5">
								02. {t("Mission")}
							</h4>
							<p className="font-[400] text-[19px] lg:text-[13px] leading-[32px] max-w-[558px] lg:max-w-none">
								{t("MissionDesc")}
							</p>
						</div>
						<div className="lg:w-full w-1/2">
							<div className="font-[400] text-[59px] leading-[78px] text-secondary flex-none order-1 flex-grow-0 w-full">
								<p className="text-left"> {t("WeDoAllThings")}</p>
								<p className="text-right"> {t("WithABigHeart")}</p>
							</div>
						</div>
					</div>

					<div className="flex-col items-center justify-start py-[88px] lg:py-[20px]">
						<div className="lg:w-full w-1/2">
							<h4 className="font-[600] text-[39px] leading-[48px] lg:mt-5">
								03. {t("Action")}
							</h4>
							<p
								className="font-[400] text-[19px] lg:text-[13px] leading-[32px]"
								dangerouslySetInnerHTML={{ __html: t("ActionDesc") }}
							></p>
						</div>
						<div className="w-full grid lg:grid-cols-1 grid-cols-2 mt-[32px]">
							{actionList.map((item) => {
								const itemDelay = `${delay}s`;
								delay += 0.2;

								return (
									<AboutUsItem
										key={item.id}
										icon={item.icon}
										title={item.title}
										desc={item.desc}
										delay={itemDelay}
									/>
								);
							})}
						</div>
					</div>
					<div className="bg-[url('/bg/our-performance-bg.svg')] bg-[center_center] bg-no-repeat bg-cover h-[560px] pt-[76px]">
						<h4 className="font-[600] text-[39px] leading-[48px] text-center mt-5">
							{t("OurPerformance")}
						</h4>
						<div className="lg:flex-col flex justify-center items-center mt-[20px]">
							<div className="relative">
								<div className="font-[600] text-[79px] leading-[118.5px] text-primary relative">
									<Image
										src="/bg/simple-icons_marketo.png"
										alt="bg-number"
										className="absolute z-[-1] left-[-40%] top-[-25%]"
										width={100}
										height={100}
										style={{ maxWidth: "none", width: "150%", height: "150%" }}
									/>
									<div className="w-[134px]">
										<CountUp start={0} end={10} duration={3} enableScrollSpy />+
									</div>
								</div>
								<div className="text-center font-[400] text-[19px] lg:text-[13px] leading-[32px] text-title">
									{t("Customer")}
								</div>
							</div>
							<div className="mx-[100px] relative">
								<div className="font-[600] text-[79px] leading-[118.5px] text-primary relative">
									<Image
										src="/bg/simple-icons_marketo.png"
										alt="bg-number2"
										className="absolute z-[-1] left-[-40%] top-[-25%]"
										width={100}
										height={100}
										style={{ maxWidth: "none", width: "150%", height: "150%" }}
									/>

                  <div className="w-[134px]">
                    <CountUp start={0} end={25} duration={3} enableScrollSpy />+
                  </div>
                </div>
                <div className="text-center font-[400] text-[19px] lg:text-[13px] leading-[32px] text-title">
                  {t("Employees")}
                </div>
              </div>
              <div className="relative">
                <div className="font-[600] text-[79px] leading-[118.5px] text-primary relative">
                  <Image
                    src="/bg/simple-icons_marketo.png"
                    alt="bg-number3"
                    className="absolute z-[-1] left-[-40%] top-[-25%]"
                    width={100}
                    height={100}
                    style={{ maxWidth: "none", width: "150%", height: "150%" }}
                  />
                  <div className="w-[134px]">
                    <CountUp start={0} end={15} duration={3} enableScrollSpy />+
                  </div>
                </div>
                <div className="text-center font-[400] text-[19px] lg:text-[13px] leading-[32px] text-title">
                  {t("Projects")}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:px-[40px] lg:flex-col flex items-start justify-start px-[88px] mt-[96px]">
            <div className="lg:w-full w-1/2">
              <h4 className="font-[600] text-[39px] leading-[49px]">
                {t("WePromiesToBring")}
              </h4>
              <p className="font-[400] text-[27px] leading-[32px] mt-10">
                {t("CoreValue")} <br /> {t("Promise")}
              </p>
            </div>
            <div className="lg:w-full lg:ml-0 lg:mt-2 w-1/2 ml-[156px]">
              <div className="pl-[32px] mb-[42px] font-[400] text-[13px] leading-[20px] relative before:rounded-full before:top-1/2 before:-translate-y-1/2 before:absolute before:left-0 before:content-[''] before:w-[16px] before:h-[16px] before:bg-primary">
                {t("CoreValue1")}
              </div>
              <div className="pl-[32px] mb-[42px] font-[400] text-[13px] leading-[20px] relative before:rounded-full before:top-1/2 before:-translate-y-1/2 before:absolute before:left-0 before:content-[''] before:w-[16px] before:h-[16px] before:bg-primary">
                {t("CoreValue2")}
              </div>
              <div className="pl-[32px] mb-[42px] font-[400] text-[13px] leading-[20px] relative before:rounded-full before:top-1/2 before:-translate-y-1/2 before:absolute before:left-0 before:content-[''] before:w-[16px] before:h-[16px] before:bg-primary">
                {t("CoreValue3")}
              </div>
              <div className="pl-[32px] mb-[42px] font-[400] text-[13px] leading-[20px] relative before:rounded-full before:top-1/2 before:-translate-y-1/2 before:absolute before:left-0 before:content-[''] before:w-[16px] before:h-[16px] before:bg-primary">
                {t("CoreValue4")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
