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
import { useLocale, useTranslations } from "next-intl";
import { Playfair_Display } from "@next/font/google";
import { useRef } from "react";
import anime from "animejs";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const visionList = [
  {
    id: 1,
    icon: Item1,
    title: "Employees",
    desc: "To become a company where each employee can discover their own value through the development of products that satisfy customers.",
    titleJp: "従業員について",
    descJp:
      "一人一人の従業員がお客様の満足を満たせる製品の開発を通して自分の価値を発見できる企業になること",
  },
  {
    id: 2,
    icon: Item2,
    title: "Customers",
    desc: "To become a company that will be a long-term and trusted partner beyond the barriers of different cultures and subconscious between Japan and Vietnam.",
    titleJp: "顧客について",
    descJp:
      "日越の異文化や潜在意識の違いなどの壁を超えて⻑期的かつ信頼されたパートナーになること",
  },
  {
    id: 3,
    icon: Item3,
    title: "Irreplaceable Partner",
    desc: "We will always by your side when you need by providing satisfaction and developing with a carefully thought.",
    titleJp: "かけがえパートナー",
    descJp:
      "熱心な思いで開発し、満足を提供することで常に必要とされる存在になること",
  },
];
const actionList = [
  {
    id: 1,
    icon: PersonIcon,
    title: "Person",
    desc: "Planning to organizing by engineers who have experience in Japan IT industry , create an organization in Japan to solve problems caused by differences in the subconscious of Japanese and Vietnamese, such as weak in understanding work, requirements, and how to do it.",
    descJp:
      "業務の理解が弱い、要件の理解が不十分、やり方がわからない等の日本人とベトナム人の潜在意識の違いによる問題点を解決するために日本側で組織を作り、日本IT業界の経験を持つエンジニアによる組織化を図ります",
  },
  {
    id: 2,
    icon: WikiIcon,
    title: "Wiki",
    desc: "Accumulate business knowledge, technical knowledge, problem-solving knowledge while promoting the project, additionally, training in our company, increase in project promotion capabilities , well- known in business ,culture of Japan and the way in thinking ,methods of Japanese .",
    descJp:
      "プロジェクトを推進する中での業務知識、技術知識、課題解決知識を蓄積していき、また社内でトレーニングを実施、プロジェクトの推進能力の向上、日本業務・文化や日本人の考え方・やり方に精通する会社を目指します。",
  },
  {
    id: 3,
    icon: AgileIcon,
    title: "Agile",
    desc: "Apply agile or proceed of agile to project development, detect and resolve issues step by step early.",
    descJp:
      "アジャイルまたはアジャイルの進め方を開発のプロセスに適用して早い段階で問題を検出し解決します",
  },
  {
    id: 4,
    icon: SolutionsIcon,
    title: "Solutions",
    desc: "Provide solutions with higher value-added and complete specification from customer specifications by making Partion Agile Wikipedia more fluently.",
    descJp:
      "パーション・アジャイル・ウィキペディアを更に成熟させることによりお客様からの仕様の完遂と、更に高付加価値のソリューションズを提供します",
  },
];

export default function AboutUsPage() {
  const animationRef = useRef(null);
  let delay = 0.2;
  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs");
      new WOW.WOW({
        live: false,
      }).init();
    }
  }, []);
  useEffect(() => {
    let performLine1 = anime.path("#perform-line-1");
    let performLine2 = anime.path("#perform-line-2");
    let performLine3 = anime.path("#perform-line-3");
    animationRef.current = anime({
      targets: "#perform-circle-1",
      translateX: performLine1("x"),
      translateY: performLine1("y"),
      rotate: performLine1("angle"),
      easing: "linear",
      duration: 5000,
      loop: true,
      autoplay: false,
      complete: () => {
        animationRef.current.pause();
        animationRef.current.remove("#perform-circle-1");
      },
      begin: () => {
        animationRef.current = anime({
          targets: "#perform-circle-2",
          translateX: performLine2("x"),
          translateY: performLine2("y"),
          rotate: performLine2("angle"),
          easing: "linear",
          duration: 6000,
          loop: true,
          begin: () => {
            animationRef.current = anime({
              targets: "#perform-circle-3",
              translateX: performLine3("x"),
              translateY: performLine3("y"),
              rotate: performLine3("angle"),
              easing: "linear",
              duration: 7000,
              loop: true,
              begin: () => {},
            });
          },
        });
      },
    });

    return () => {
      animationRef.current?.pause();
    };
  }, []);

  const t = useTranslations("AboutUs");
  const locale = useLocale();

  return (
    <div className="relative overflow-hidden">
      <div className="relative xl:max-w-[1440px] mx-auto">
        <div className="lg:px-[40px] px-[80px] xl:max-w-[1440px] mx-auto bg-[url('/bg/about-bg.svg')] bg-no-repeat bg-auto bg-[-1%_10%]">
          <div className="lg:flex-col flex flex-wrap items-center justify-center py-[88px] lg:py-[20px]">
            <div className="lg:w-full w-1/2">
              <div className="lg:mx-auto relative bg-[url('/blue-circle.svg')] bg-no-repeat w-[288px] h-[293px]">
                <div
                  className={`${playfair.className} text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[700] text-[67px] whitespace-nowrap`}
                >
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
                      title={locale === "en" ? item.title : item.titleJp}
                      desc={locale === "en" ? item.desc : item.descJp}
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
                <p className={`${playfair.className} text-left font-[400]`}>
                  {t("WeDoAllThings")}
                </p>
                <p className={`${playfair.className} text-right font-[400]`}>
                  {t("WithABigHeart")}
                </p>
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
                    desc={locale === "en" ? item.desc : item.descJp}
                    delay={itemDelay}
                  />
                );
              })}
            </div>
          </div>
          <div className="relative">
            <svg
              width="1240"
              height="560"
              viewBox="0 0 1240 560"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute z-[-10] w-full lg:top-[21%] s:top-[27%]"
            >
              <g clipPath="url(#clip0_116_2159)">
                <circle
                  id="perform-line-1"
                  opacity="0.2"
                  cx="625"
                  cy="225"
                  r="224"
                  stroke="#314753"
                  strokeWidth="2"
                  strokeMiterlimit="3.86874"
                  strokeDasharray="3 10"
                />
                <circle
                  id="perform-line-2"
                  opacity="0.2"
                  cx="625"
                  cy="225"
                  r="274"
                  stroke="#314753"
                  strokeWidth="2"
                  strokeMiterlimit="3.86874"
                  strokeDasharray="3 10"
                />
                <circle
                  id="perform-line-3"
                  opacity="0.2"
                  cx="625"
                  cy="230"
                  r="329"
                  stroke="#314753"
                  strokeWidth="2"
                  strokeMiterlimit="3.86874"
                  strokeDasharray="3 10"
                />
                <g opacity="0.2" filter="url(#filter0_d_116_2159)">
                  <path
                    d="M800 403.881C800 389.587 811.587 378 825.88 378"
                    stroke="#25C2E8"
                    strokeWidth="20.2985"
                  />
                </g>
                <g filter="url(#filter1_d_116_2159)">
                  <path
                    d="M792 404.06C792 425.079 809.04 442.119 830.06 442.119C851.079 442.119 868.119 425.079 868.119 404.06C868.119 383.04 851.079 366 830.06 366"
                    stroke="#25C2E8"
                    strokeWidth="1.01493"
                    strokeLinecap="round"
                  />
                </g>
                <g opacity="0.1" filter="url(#filter2_d_116_2159)">
                  <path
                    d="M275.468 296.47L292.057 306.048C294.417 307.41 295.871 309.928 295.871 312.653V331.809C295.871 334.534 294.417 337.052 292.057 338.414L275.468 347.992C273.108 349.354 270.2 349.354 267.841 347.992L251.251 338.414C248.891 337.052 247.438 334.534 247.438 331.809V312.653C247.438 309.928 248.891 307.41 251.251 306.048L267.841 296.47C270.2 295.107 273.108 295.107 275.468 296.47Z"
                    fill="#25C2E8"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M276.421 287.277C273.471 285.574 269.837 285.574 266.887 287.277L243.767 300.626C240.817 302.329 239 305.476 239 308.882V335.579C239 338.985 240.817 342.133 243.767 343.836L266.887 357.184C269.837 358.887 273.471 358.887 276.421 357.184L299.541 343.836C302.491 342.133 304.308 338.985 304.308 335.579V308.882C304.308 305.476 302.491 302.329 299.541 300.626L276.421 287.277ZM266.887 294.818C269.837 293.115 273.471 293.115 276.421 294.818L293.01 304.396C295.96 306.099 297.777 309.247 297.777 312.653V331.809C297.777 335.215 295.96 338.362 293.01 340.065L276.421 349.643C273.471 351.346 269.837 351.346 266.887 349.643L250.298 340.065C247.348 338.362 245.531 335.215 245.531 331.809V312.653C245.531 309.247 247.348 306.099 250.298 304.396L266.887 294.818Z"
                    fill="#25C2E8"
                  />
                </g>
                <g opacity="0.1" filter="url(#filter3_d_116_2159)">
                  <path
                    d="M312.412 357.144C313.887 356.292 315.704 356.292 317.179 357.144L337.182 368.693C338.657 369.544 339.566 371.118 339.566 372.821V395.919C339.566 397.622 338.657 399.195 337.182 400.047L317.179 411.596C315.704 412.447 313.887 412.447 312.412 411.596L292.409 400.047C290.934 399.195 290.025 397.622 290.025 395.919V372.821C290.025 371.118 290.934 369.544 292.409 368.693L312.412 357.144Z"
                    fill="#25C2E8"
                  />
                  <path
                    d="M309.912 358.587L311.579 357.625L311.936 358.244L312.77 357.763C313.08 357.583 313.409 357.448 313.747 357.358L313.562 356.667C314.37 356.451 315.221 356.451 316.029 356.667L315.844 357.358C316.182 357.448 316.511 357.583 316.821 357.763L317.655 358.244L318.012 357.625L319.679 358.587L319.322 359.207L320.989 360.169L321.346 359.55L323.013 360.512L322.656 361.131L324.323 362.094L324.68 361.475L326.347 362.437L325.99 363.056L327.657 364.019L328.014 363.399L329.681 364.362L329.323 364.981L330.99 365.943L331.348 365.324L333.015 366.287L332.657 366.906L334.324 367.868L334.682 367.249L336.349 368.211L335.991 368.831L336.825 369.312C337.136 369.491 337.417 369.708 337.664 369.956L338.17 369.45C338.761 370.041 339.187 370.779 339.403 371.587L338.713 371.772C338.803 372.11 338.851 372.462 338.851 372.821V373.783H339.566V375.708H338.851V377.633H339.566V379.558H338.851V381.483H339.566V383.407H338.851V385.332H339.566V387.257H338.851V389.182H339.566V391.107H338.851V393.031H339.566V394.956H338.851V395.919C338.851 396.278 338.803 396.63 338.713 396.967L339.403 397.152C339.187 397.96 338.761 398.698 338.17 399.289L337.664 398.784C337.417 399.031 337.136 399.248 336.825 399.428L335.991 399.909L336.349 400.528L334.682 401.491L334.324 400.871L332.657 401.834L333.015 402.453L331.348 403.415L330.99 402.796L329.323 403.758L329.681 404.378L328.014 405.34L327.657 404.721L325.99 405.683L326.347 406.303L324.68 407.265L324.323 406.646L322.656 407.608L323.013 408.227L321.346 409.19L320.989 408.57L319.322 409.533L319.679 410.152L318.012 411.115L317.655 410.495L316.821 410.977C316.511 411.156 316.182 411.291 315.844 411.381L316.029 412.072C315.221 412.289 314.37 412.289 313.562 412.072L313.747 411.381C313.409 411.291 313.08 411.156 312.77 410.977L311.936 410.495L311.579 411.115L309.912 410.152L310.269 409.533L308.602 408.57L308.245 409.19L306.578 408.227L306.935 407.608L305.268 406.646L304.911 407.265L303.244 406.303L303.601 405.683L301.934 404.721L301.577 405.34L299.91 404.378L300.268 403.758L298.601 402.796L298.243 403.415L296.576 402.453L296.934 401.834L295.267 400.871L294.909 401.491L293.242 400.528L293.6 399.909L292.766 399.428C292.455 399.248 292.174 399.031 291.927 398.784L291.421 399.289C290.83 398.698 290.404 397.96 290.188 397.152L290.878 396.967C290.788 396.63 290.74 396.278 290.74 395.919V394.956H290.025V393.031H290.74V391.107H290.025V389.182H290.74V387.257H290.025V385.332H290.74V383.407H290.025V381.483H290.74V379.558H290.025V377.633H290.74V375.708H290.025V373.783H290.74V372.821C290.74 372.462 290.788 372.11 290.878 371.772L290.188 371.587C290.404 370.779 290.83 370.041 291.421 369.45L291.927 369.956C292.174 369.708 292.455 369.491 292.766 369.312L293.6 368.831L293.242 368.211L294.909 367.249L295.267 367.868L296.934 366.906L296.576 366.287L298.243 365.324L298.601 365.943L300.268 364.981L299.91 364.362L301.577 363.399L301.934 364.019L303.601 363.056L303.244 362.437L304.911 361.475L305.268 362.094L306.935 361.131L306.578 360.512L308.245 359.55L308.602 360.169L310.269 359.207L309.912 358.587Z"
                    stroke="white"
                    strokeWidth="1.43011"
                    strokeDasharray="1.91 1.91"
                  />
                </g>
                <g opacity="0.1" filter="url(#filter4_d_116_2159)">
                  <path
                    d="M356.269 330.851C357.154 330.34 358.245 330.34 359.13 330.851L368.654 336.35C369.539 336.861 370.085 337.805 370.085 338.827V349.826C370.085 350.848 369.539 351.792 368.654 352.303L359.13 357.802C358.245 358.313 357.154 358.313 356.269 357.802L346.745 352.303C345.86 351.792 345.314 350.848 345.314 349.826V338.827C345.314 337.805 345.86 336.861 346.745 336.35L356.269 330.851Z"
                    fill="#25C2E8"
                  />
                </g>
                <circle
                  id="perform-circle-2"
                  opacity="0.3"
                  cx="0"
                  cy="0"
                  r="12"
                  fill="#F1673A"
                />
                <circle
                  id="perform-circle-1"
                  opacity="0.3"
                  cx="0"
                  cy="0"
                  r="12"
                  fill="#F1673A"
                />
                <circle
                  id="perform-circle-3"
                  opacity="0.3"
                  cx="0"
                  cy="0"
                  r="12"
                  fill="#F1673A"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_116_2159"
                  x="785.851"
                  y="367.851"
                  width="44.0298"
                  height="44.0298"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_116_2159"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_116_2159"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_116_2159"
                  x="787.492"
                  y="365.493"
                  width="85.1345"
                  height="85.1343"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_116_2159"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_116_2159"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_d_116_2159"
                  x="235"
                  y="286"
                  width="73.3083"
                  height="80.4616"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_116_2159"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_116_2159"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter3_d_116_2159"
                  x="286.025"
                  y="356.505"
                  width="57.5403"
                  height="63.7293"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_116_2159"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_116_2159"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter4_d_116_2159"
                  x="341.314"
                  y="330.468"
                  width="32.7703"
                  height="35.7172"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_116_2159"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_116_2159"
                    result="shape"
                  />
                </filter>
                <clipPath id="clip0_116_2159">
                  <rect width="1240" height="560" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div
              className="
            
            bg-[center_center] bg-no-repeat bg-cover h-[560px] pt-[76px]"
            >
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
                      style={{
                        maxWidth: "none",
                        width: "150%",
                        height: "150%",
                      }}
                    />
                    <div className="w-[134px]">
                      <CountUp
                        start={0}
                        end={10}
                        duration={3}
                        enableScrollSpy
                        className="flex"
                      >
                        {({ countUpRef }) => (
                          <>
                            <span ref={countUpRef} />+
                          </>
                        )}
                      </CountUp>
                    </div>
                  </div>
                  <div className="text-center font-[400] text-[19px] lg:text-[13px] leading-[32px] text-sub">
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
                      style={{
                        maxWidth: "none",
                        width: "150%",
                        height: "150%",
                      }}
                    />

                    <div className="w-[134px]">
                      <CountUp
                        start={0}
                        end={25}
                        duration={3}
                        enableScrollSpy
                        className="flex"
                      >
                        {({ countUpRef }) => (
                          <>
                            <span ref={countUpRef} />+
                          </>
                        )}
                      </CountUp>
                    </div>
                  </div>
                  <div className="text-center font-[400] text-[19px] lg:text-[13px] leading-[32px] text-sub">
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
                      style={{
                        maxWidth: "none",
                        width: "150%",
                        height: "150%",
                      }}
                    />
                    <div className="w-[134px]">
                      <CountUp
                        start={0}
                        end={15}
                        duration={3}
                        enableScrollSpy
                        className="flex"
                      >
                        {({ countUpRef }) => (
                          <>
                            <span ref={countUpRef} />+
                          </>
                        )}
                      </CountUp>
                    </div>
                  </div>
                  <div className="text-center font-[400] text-[19px] lg:text-[13px] leading-[32px] text-sub">
                    {t("Projects")}
                  </div>
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
