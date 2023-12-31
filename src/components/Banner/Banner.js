"use client";
import { Icon } from "../Icon/Icon";
import anime from "animejs";
import { useEffect, useRef, useState } from "react";
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
  Circle5Icon,
  Circle10Icon,
  Item1Icon,
  Item2Icon,
  Item3Icon,
  Item4Icon,
} from "@/assets/icons";
import { Header } from "./Header";
import { useTranslations } from "next-intl";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const Banner = ({
  firstBannerAnimationsStarted,
  setFirstBannerAnimationsStarted,
  setOpenMobileNav,
  setOpen,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const animationInstanceRef = useRef(null);
  const tagAnimationInstanceRef = useRef(null);
  const gearAnimationInstanceRef = useRef(null);
  const t = useTranslations("Banner1");
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (firstBannerAnimationsStarted) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [firstBannerAnimationsStarted]);

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    let motion_path = anime.path("#circle6");
    const targets = document.querySelectorAll(".tag-anime");
    const shuffledTargets = shuffleArray([...targets]);

    animationInstanceRef.current = anime({
      autoplay: false,
      targets: ".logo-animate",
      opacity: [0, 1],
      duration: 800,
      elasticity: 600,
      easing: "linear",
      complete: () => {
        animationInstanceRef.current = anime({
          targets: ".loading-animate",
          opacity: [0, 1],
          rotate: 360,
          scale: [2, 1],
          duration: 800,
          elasticity: 600,
          easing: "linear",
          complete: () => {
            animationInstanceRef.current = anime({
              targets: ".explain-logo-animate",
              opacity: [0, 1],
              duration: 500,
              elasticity: 600,
              easing: "linear",
              complete: () => {
                animationInstanceRef.current = anime({
                  targets: ".explain-logo-animate-2",
                  opacity: [0, 1],
                  duration: 500,
                  elasticity: 600,
                  easing: "linear",
                  complete: () => {
                    animationInstanceRef.current = anime({
                      targets: ".explain-logo-animate-3",
                      opacity: [0, 1],
                      duration: 500,
                      elasticity: 600,
                      easing: "linear",
                      complete: () => {
                        animationInstanceRef.current = anime({
                          targets: ".explain-logo-animate-4",
                          opacity: [0, 1],
                          duration: 500,
                          elasticity: 600,
                          easing: "linear",
                        });
                      },
                    });
                  },
                });
              },
            });
            animationInstanceRef.current = anime({
              targets: ".z-letter-animate",
              opacity: [0, 1],
              rotate: 360,
              scale: [2, 1],
              duration: 500,
              elasticity: 600,
              easing: "linear",
              complete: () => {
                animationInstanceRef.current = anime({
                  targets: ".e-letter-animate",
                  opacity: [0, 1],
                  rotate: 360,
                  scale: [2, 1],
                  duration: 500,
                  elasticity: 600,
                  easing: "linear",
                  complete: () => {
                    animationInstanceRef.current = anime({
                      targets: ".n-letter-animate",
                      opacity: [0, 1],
                      rotate: 360,
                      scale: [2, 1],
                      duration: 500,
                      elasticity: 600,
                      easing: "linear",
                      complete: () => {
                        animationInstanceRef.current = anime({
                          targets: ".dot-letter-animate",
                          opacity: [0, 1],
                          rotate: 360,
                          scale: [2, 1],
                          duration: 500,
                          elasticity: 600,
                          easing: "linear",
                          complete: () => {
                            animationInstanceRef.current = anime({
                              targets: ".s-letter-animate",
                              opacity: [0, 1],
                              rotate: 360,
                              scale: [2, 1],
                              duration: 500,
                              elasticity: 600,
                              easing: "linear",
                              complete: () => {
                                animationInstanceRef.current = anime({
                                  targets: ".orange-circle-animate",
                                  opacity: [0, 1],
                                  duration: 500,
                                  elasticity: 600,
                                  easing: "linear",
                                  complete: () => {
                                    animationInstanceRef.current = anime({
                                      targets: "#circle7",
                                      translateX: motion_path("x"),
                                      translateY: motion_path("y"),
                                      rotate: motion_path("angle"),
                                      easing: "linear",
                                      duration: 5000,
                                      loop: true,
                                      begin: () => {
                                        let circle7 =
                                          document.querySelector("#circle7");
                                        if (circle7) {
                                          circle7.style.opacity = 1;
                                        }
                                        animationInstanceRef.current = anime({
                                          targets: ".blue-circle-animate",
                                          opacity: [0, 1],
                                          duration: 500,
                                          elasticity: 600,
                                          easing: "linear",
                                          complete: () => {
                                            let motion_path_2 =
                                              anime.path("#circle8");
                                            animationInstanceRef.current =
                                              anime({
                                                targets: "#circle9",
                                                translateX:
                                                  isPlaying &&
                                                  motion_path_2("x"),
                                                translateY:
                                                  isPlaying &&
                                                  motion_path_2("y"),
                                                rotate:
                                                  isPlaying &&
                                                  motion_path_2("angle"),
                                                easing: "linear",
                                                duration: 5000,
                                                loop: true,
                                                begin: () => {
                                                  if (
                                                    document.querySelector(
                                                      "#circle9"
                                                    )
                                                  ) {
                                                    document.querySelector(
                                                      "#circle9"
                                                    ).style.opacity = 1;
                                                  }
                                                },
                                                complete: () => {},
                                              });
                                          },
                                        });
                                      },
                                    });
                                  },
                                });
                              },
                            });
                          },
                        });
                      },
                    });
                  },
                });
              },
            });
          },
        });
      },
    });

    tagAnimationInstanceRef.current = anime({
      targets: shuffledTargets,
      opacity: [0, 1],
      duration: 500,
      delay: function (el, i) {
        return i * 100; // Add a delay to each element based on its index
      },
      loop: true,
      direction: "alternate",
      easing: "easeInOutSine",
    });

    gearAnimationInstanceRef.current = anime({
      targets: ".gear-animate",
      rotate: 360,
      duration: 1600,
      loop: true,
      elasticity: 600,
      easing: "linear",
    });
    setFirstBannerAnimationsStarted(true);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      animationInstanceRef.current?.play();
      tagAnimationInstanceRef.current?.play();
      gearAnimationInstanceRef.current?.play();
    } else {
      animationInstanceRef.current?.pause();
      tagAnimationInstanceRef.current?.pause();
      gearAnimationInstanceRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <div className="bg-gradient-to-b from-[#E2F6FC] h-[804px] sm:h-auto w-full overflow-hidden text-sub">
      <div className="relative xl:max-w-[1440px] mx-auto h-[804px]">
        <Header
          showLogo
          setOpenMobileNav={setOpenMobileNav}
          setOpen={setOpen}
        />
        <div className="w-full h-full">
          <Icon className="top-[266.44px] left-[23.21px] gear-animate">
            <Gear1Icon width={24.86} height={25.59} />
          </Icon>
          <Icon className="top-[256.25px] left-[44.81px] gear-animate">
            <Gear2Icon width={15.19} height={15.63} />
          </Icon>

          <Icon className="top-[378.22px] left-[75.92px] gear-animate">
            <Gear3Icon width={41.59} height={42.82} />
          </Icon>

          <Icon className="top-[325.45px] left-[26.21px] gear-animate">
            <Gear4Icon width={68.1} height={70.1} />
          </Icon>

          <Icon className="top-[244.1px] left-[204px] tag-anime">
            <CSSIcon width={44} height={40.59} />
          </Icon>

          <Icon className="top-[500.4px] left-[78px] tag-anime">
            <BraceIcon width={49.75} height={54.09} />
          </Icon>

          <Icon className="top-[544.88px] left-[73px] tag-anime">
            <HTMLIcon width={63.13} height={58.25} />
          </Icon>
          <Icon className="top-[355.08px] left-[417.1px]">
            <Circle1Icon width={11.49} height={12.67} />
          </Icon>
          <Icon className="top-[141.27px] left-[929px]">
            <Gear5Icon width={68.1} height={79.65} />
          </Icon>
          <Icon className="top-[155.43px] left-[980.99px]">
            <Gear6Icon width={116.39} height={136.08} />
          </Icon>

          <Icon className="top-[200.17px] left-[1092.28px]">
            <Gear7Icon width={69.08} height={80.78} />
          </Icon>

          <Icon className="top-[279.38px] left-[1205.8px] tag-anime">
            <JavaIcon width={43.66} height={40.28} />
          </Icon>

          <Icon className="top-[226.44px] left-[1263px] tag-anime">
            <PHPIcon width={67.14} height={61.96} />
          </Icon>

          <Icon className="top-[355.95px] left-[1042.39px]">
            <Circle2Icon width={11.49} height={12.67} />
          </Icon>

          <Icon className="top-[606.2px] left-[859.23px]">
            <Circle3Icon width={10.04} height={11.09} />
          </Icon>

          <Icon className="top-[538.5px] left-[1042.39px]">
            <Circle4Icon width={11.49} height={12.67} />
          </Icon>

          <Icon className="top-[529.78px] left-[1072px] tag-anime">
            <JSIcon width={55} height={59.8} />
          </Icon>
          <Icon className="top-[657.09px] left-[1317px] tag-anime">
            <DivIcon width={34.4} height={37.41} />
          </Icon>

          <Icon className="top-[92.38px] left-[375.11px] lg:left-[10%] orange-circle-animate animate opacity-0">
            <Circle6Icon
              width={528.39}
              height={527.74}
              idPath="circle6"
              className="sm:w-[71vw] h-auto"
            />
          </Icon>

          <Icon
            className="top-[77px] left-[357px] lg:left-[7%] opacity-0 animate"
            id="circle7"
          >
            <Circle7Icon width={34.56} height={34.52} />
          </Icon>

          <Icon className="top-[65.38px] left-[789.78px] blue-circle-animate animate opacity-0">
            <Circle8Icon width={377.8} height={377.8} idPath="circle8" />
          </Icon>

          <Icon
            className="top-[42.07px] left-[760px] opacity-0 animate"
            id="circle9"
          >
            <Circle9Icon width={59.4} height={59.31} />
          </Icon>

          {screenWidth < 600 ? (
            <Icon className="top-[9.6%] left-[23.7%] max-h-[601.98px] h-[74.7%] w-[48.6%] hidden sm:block">
              <Icon className="top-[25.0%] left-[15.1%] z-[1] logo-animate animate opacity-0">
                <Icon className="top-[32%] left-[32%]">
                  <Circle5Icon width={70} height={70} />
                  <Icon className="top-[6.9%] left-[6.9%] scale-90">
                    <Circle10Icon width={58} height={59} />
                  </Icon>
                  <Icon className="top-[35.2%] left-[12.6%] loading-animate animate opacity-0">
                    <LoadingIcon width={16} height={16} />
                  </Icon>
                  <Icon className="top-[35.2%] left-[34.1%] z-letter-animate animate opacity-0">
                    <ZIcon width={8} height={12} />
                  </Icon>
                  <Icon className="top-[41.2%] left-[46.2%] e-letter-animate animate opacity-0">
                    <EIcon width={8} height={8} />
                  </Icon>
                  <Icon className="top-[41.2%] left-[56.9%] n-letter-animate animate opacity-0">
                    <NIcon width={8} height={8} />
                  </Icon>
                  <Icon className="top-[49.2%] left-[68.9%] dot-letter-animate animate opacity-0">
                    <DotIcon width={2} height={2} />
                  </Icon>
                  <Icon className="top-[35%] left-[71%] s-letter-animate animate opacity-0">
                    <SIcon width={12} height={12} />
                  </Icon>
                </Icon>
              </Icon>
              <div className="z-0">
                <Icon className="top-[5.5%] s:left-[-50.9%] sm:left-[-35.9%] opacity-0 explain-logo-animate animate">
                  <Item1Icon width={160} height={160}></Item1Icon>
                  <span className="font-[400] text-[6px] leading-[9px] tracking-[0.01em] absolute top-[35%] left-[20%] max-w-[85px]">
                    {t("Explain1")}
                  </span>
                </Icon>
                <Icon className="top-[8.6%] s:left-[13.8%] sm:left-[13.8%] opacity-0 explain-logo-animate-2 animate">
                  <Item2Icon width={120} height={120}></Item2Icon>
                  <span className="font-[400] text-[6px] leading-[9px] tracking-[0.01em] absolute top-[32%] left-[29%] max-w-[60px]">
                    {t("Explain2")}
                  </span>
                </Icon>
                <Icon className="top-[12.6%] s:left-[44.8%] sm:left-[35.8%] opacity-0 explain-logo-animate-3 animate">
                  <Item3Icon width={220} height={220}></Item3Icon>
                  <span className="font-[400] text-[6px] leading-[9px] tracking-[0.01em] absolute top-[34%] left-[28%] max-w-[130px]">
                    {t("Explain3")}
                  </span>
                </Icon>
                <Icon className="top-[31%] s:left-[-54%] sm:left-[-45%] opacity-0 explain-logo-animate-4 animate">
                  <Item4Icon width={190} height={190}></Item4Icon>
                  <span className="font-[400] text-[6px] leading-[9px] tracking-[0.01em] absolute top-[37%] left-[21%] max-w-[115px]">
                    {t("Explain4")}
                  </span>
                </Icon>
              </div>
            </Icon>
          ) : (
            <Icon className="top-[73.72px] left-[341.44px] lg:left-[10%] max-h-[601.98px] h-[601.98px] w-[700.56px] sm:hidden">
              <Icon className="top-[201.19px] left-[217.52px] z-10 logo-animate animate opacity-0">
                <Icon className="top-[32%] left-[32%]">
                  <Circle5Icon width={160.7} height={160.5} />
                  <Icon className="top-[8px] left-[8px] scale-90">
                    <Circle10Icon width={140.83} height={140.99} />
                  </Icon>
                  <Icon className="top-[68.24px] left-[24.94px] loading-animate animate opacity-0">
                    <LoadingIcon width={36.78} height={37.54} />
                  </Icon>
                  <Icon className="top-[68.27px] left-[65.91px] z-letter-animate animate opacity-0">
                    <ZIcon width={12.38} height={18.78} />
                  </Icon>
                  <Icon className="top-[71.68px] left-[80.64px] e-letter-animate animate opacity-0">
                    <EIcon width={14.69} height={15.37} />
                  </Icon>
                  <Icon className="top-[71.92px] left-[98.21px] n-letter-animate animate opacity-0">
                    <NIcon width={13.64} height={15.13} />
                  </Icon>
                  <Icon className="top-[83.1px] left-[115.18px] dot-letter-animate animate opacity-0">
                    <DotIcon width={3.93} height={3.95} />
                  </Icon>
                  <Icon className="top-[68.27px] left-[122.12px] s-letter-animate animate opacity-0">
                    <SIcon width={12.86} height={18.79} />
                  </Icon>
                </Icon>
              </Icon>
              <div className="z-0">
                <Icon className="top-[0%] left-[-3%] opacity-0 explain-logo-animate animate">
                  <Item1Icon width={293.32} height={282.67}></Item1Icon>
                  <span className="font-[400] text-[10px] leading-[16px] tracking-[0.01em] absolute top-[35%] left-[27%] max-w-[122.04px]">
                    {t("Explain1")}
                  </span>
                </Icon>
                <Icon className="top-[-3.5%] left-[30%] opacity-0 explain-logo-animate-2 animate">
                  <Item2Icon width={251.54} height={254.16}></Item2Icon>
                  <span className="font-[400] text-[10px] leading-[16px] tracking-[0.01em] absolute top-[39%] left-[29%] max-w-[119.88px]">
                    {t("Explain2")}
                  </span>
                </Icon>
                <Icon className="top-[19%] left-[51.5%] opacity-0 explain-logo-animate-3 animate">
                  <Item3Icon width={361.96} height={333.55}></Item3Icon>
                  <span className="font-[400] text-[10px] leading-[15px] tracking-[0.01em] absolute top-[28%] left-[32%] max-w-[172px]">
                    {t("Explain3")}
                  </span>
                </Icon>
                <Icon className="top-[50%] left-[-6%] opacity-0 explain-logo-animate-4 animate">
                  <Item4Icon width={333.96} height={336.55}></Item4Icon>
                  <span className="font-[400] text-[10px] leading-[16px] tracking-[0.01em] absolute top-[37%] left-[26%] max-w-[184px]">
                    {t("Explain4")}
                  </span>
                </Icon>
              </div>
            </Icon>
          )}
        </div>
      </div>
    </div>
  );
};
