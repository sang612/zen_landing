"use client";

import { FlyIcon } from "@/assets/icons";
import { AboutUsItem } from "@/components/AboutUs/AboutUsItem";
import { Icon } from "@/components/Icon/Icon";
import anime from "animejs";
import { useEffect, useRef } from "react";
import "../../pages/styles/globals.css";
import {
  AIIcon,
  CloudIcon,
  Delivery,
  Hearing,
  Hearing2,
  HumanResource,
  LabContract,
  MobileIcon,
  Proposal,
  Proposal2,
  SharePointIcon,
  StartingDevelopment,
  WebServiceIcon,
} from "@/assets/icons/services";
import { ServicesSlider } from "@/components/Services/ServicesSlider";
import { TextSection } from "@/components/Services/TextSection";
import { TechnologyItem } from "@/components/Services/TechnologyItem";

const laboContractList = [
  {
    id: 1,
    icon: Hearing,
    title: "hearing",
    desc: "We will be hearing more specifically in order to propose appropriate human resources and a good system.",
  },
  {
    id: 2,
    icon: Proposal,
    title: "Proposal - Contract",
    desc: "ZenS sets up a meeting if necessary. We also propose in detail how to successfully proceed in the future.",
  },
  {
    id: 3,
    icon: HumanResource,
    title: "Human resource selection",
    desc: "Based on the information that we hearing, ZenS will select candidates internally and make suggestions.",
  },
  {
    id: 4,
    icon: LabContract,
    title: "Staring lab contract",
    desc: "ZenS proceeds to start based on the requirements concluded. Because we prepair Japanese support system and a flexible development system, We will proceeds to start with minimum communication cost with the help of a support system in Japanese and a flexible development system.",
  },
];
const servicesList = [
  {
    id: 1,
    icon: MobileIcon,
    title: "Mobile Development",
    listDesc: [
      "OS: Android, iOS",
      "Programing language：Flutter、Swift、Java、Native、Kotlin、Objective-C",
      "Cross-platform: React Native, Flutter, Xamarin",
    ],
  },
  {
    id: 2,
    icon: AIIcon,
    title: "AI & Blockchain",
    listDesc: [
      "Image recognition",
      "IoT device connectivity providing",
      "Coin - Token development",
    ],
  },
  {
    id: 3,
    icon: WebServiceIcon,
    title: "Web service and system development",
    listDesc: [
      "EC site Building and development ,HPcreation , wordpess developement, etc.",
      "E-learning site building and development",
      "Programing language: PHP, Java, C#, .Net",
      "EC: Magento, EC-CUBE, Shopify",
      "Infra: AWS, Azure, DevOps",
    ],
  },
  {
    id: 4,
    icon: CloudIcon,
    title: "Cloud",
    listDesc: [
      "AWS building, migration and development",
      "Azure building, migration and development",
      "Google Cloud building, migration and development",
    ],
  },
  {
    id: 5,
    icon: SharePointIcon,
    title: "Sharepoint",
    listDesc: ["Consulting", "Sharepoint Online"],
  },
];
const technologyList = [
  {
    id: 1,
    icon: "/services/react-native.svg",
    name: "React Native",
  },
  {
    id: 2,
    icon: "/services/reactjs.svg",
    name: "ReactJs",
  },
  {
    id: 3,
    icon: "/services/php.svg",
    name: "PHP",
  },
  {
    id: 4,
    icon: "/services/java.svg",
    name: "Java",
  },
  {
    id: 5,
    icon: "/services/solidity.svg",
    name: "Solidity",
  },
  {
    id: 6,
    icon: "/services/ruby-on-rails.svg",
    name: "Ruby on rails",
  },
  {
    id: 7,
    icon: "/services/nodejs.svg",
    name: "Node JS",
  },
  {
    id: 8,
    icon: "/services/python.svg",
    name: "Python",
  },
  {
    id: 9,
    icon: "/services/sharepoint.svg",
    name: "Sharepoint",
  },
];
const contractAgreementList = [
  {
    id: 1,
    icon: Hearing2,
    title: "Hearing",
    desc: "ZenS are willing to hear more specifically about the project in order to propose it in an appropriate way or at a low price.",
  },
  {
    id: 2,
    icon: Proposal2,
    title: "Proposal - Quotation - Contract",
    desc: "ZenS makes a proposal and quotation according to the hearing and draws up a contract with a flexible contract type such as project-based contract or T&M contract based on the characteristics of the project.",
  },
  {
    id: 3,
    icon: StartingDevelopment,
    title: "Starting development",
    desc: "ZenS sets up a system and starts development. ZenS always keeps HORENSO in mind while proceeding.",
  },
  {
    id: 4,
    icon: Delivery,
    title: "Delivery and maintenance",
    desc: "After the delivery review, ZenS also help you about maintenance and operation.",
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
          <div className="py-[88px]">
            <ServicesSlider servicesList={servicesList} />
            <p className="max-w-[824px] mx-auto text-center">
              We provide full-cycle services that cover all aspects of software
              engineering, from web and mobile app development to software
              testing and quality assurance.
            </p>
          </div>
          <div className="my-[100px]">
            <TextSection
              title="Our technology solution"
              desc="ZenS can support high-tech (AI, etc.) from basic development language."
            />
            <div className="grid grid-cols-3 mt-[36px] mx-auto justify-items-start max-w-[865px]">
              {technologyList.map((item) => {
                return (
                  <TechnologyItem
                    name={item.name}
                    iconSrc={item.icon}
                    key={item.id}
                  />
                );
              })}
            </div>
          </div>
          <div className="my-[100px]">
            <TextSection
              title="Labo contract (ODC)"
              desc="A Lab contract (Lab-type development) is a contract that allows you to secure a certain number of excellent overseas engineers for a certain period (usually about half a year to a year) and proceed with a project development system (contract type is quasi contract). In other words, you can have your own overseas engineer team for a certain period of time regardless of whether or not you have a project."
            />
            <div className="grid grid-cols-2 mt-[80px]">
              {laboContractList.map((item) => {
                return (
                  <AboutUsItem
                    desc={item.desc}
                    icon={item.icon}
                    title={item.title}
                    key={item.id}
                  />
                );
              })}
            </div>
          </div>
          <div className="mt-[172px] mb-[120px]">
            <TextSection
              title="Contract agreement"
              desc="Contract agreement (Agreement type development) is a contract to deliver deliverables based on a defined delivery date and number in the contract. ZenS will proceed project development based on the requirement definition and the specifications at the time of ordering."
            />
            <div className="grid grid-cols-2 mt-[80px]">
              {contractAgreementList.map((item) => {
                return (
                  <AboutUsItem
                    desc={item.desc}
                    icon={item.icon}
                    title={item.title}
                    key={item.id}
                  />
                );
              })}
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
