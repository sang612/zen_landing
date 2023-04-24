"use client";

import { MapPinIcon, PhoneIcon } from "@/assets/icons";
import {
  Facebook,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "@/assets/icons/footer";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const t = useTranslations("Nav");
  return (
    <footer className="border-t border-[#0000001a] border-solid mt-[100px] bg-[#fff] font-sans">
      <div className="xl:max-w-[1440px] mx-auto px-[168px] lg:px-[40px] pb-[20px] pt-[55px]">
        <div className="flex flex-wrap justify-between lg:justify-center items-center lg:w-full">
          <div className="lg:w-full">
            <h3 className="font-[700] text-[87px] lg:text-[60px] lg:leading-[70px] leading-[104.4px] text-secondary lg:text-center">
              Let’s <br /> Connect
            </h3>
            <div className="flex justify-start lg:justify-center items-center mt-[68px]">
              <Link
                href="https://www.facebook.com/zens.company/"
                className="mr-[20px]"
                target="_blank"
              >
                <Facebook />
              </Link>
              <Link href="" className="mr-[20px]">
                <Twitter />
              </Link>
              <Link
                href="https://www.linkedin.com/company/zens-technology-company-limited/about/"
                className="mr-[20px]"
              >
                <Linkedin />
              </Link>
              <Link href="" className="mr-[20px]">
                <Youtube />
              </Link>
            </div>
            <div className="mt-[40px]">
              <div className="flex lg:justify-center lg:text-center">
                <Link
                  href="/"
                  className="min-w-[85px] mr-[40px] lg:mr-[15px] mb-[24px] font-[600] text-[15px] leading-[28px] text-title hover:text-primary transition-all duration-300"
                >
                  {t("AboutUs")}
                </Link>
                <Link
                  href="/recruitment"
                  className="min-w-[85px] mr-[40px] lg:mr-[15px] mb-[24px] font-[600] text-[15px] leading-[28px] text-title hover:text-primary transition-all duration-300"
                >
                  {t("Recruitment")}
                </Link>
              </div>
              <div className="flex lg:justify-center lg:text-center">
                <Link
                  href="/services"
                  className="min-w-[85px] mr-[40px] lg:mr-[15px] mb-[24px] font-[600] text-[15px] leading-[28px] text-title hover:text-primary transition-all duration-300"
                >
                  {t("Services")}
                </Link>
                <Link
                  href="/news"
                  className="min-w-[85px] mr-[40px] lg:mr-[15px] mb-[24px] font-[600] text-[15px] leading-[28px] text-title hover:text-primary transition-all duration-300"
                >
                  {t("News")}
                </Link>
              </div>
              <div className="flex lg:justify-center lg:text-center">
                <Link
                  href="/casestudy"
                  className="min-w-[85px] mr-[40px] lg:mr-[15px] mb-[24px] font-[600] text-[15px] leading-[28px] text-title hover:text-primary transition-all duration-300"
                >
                  {t("Casestudy")}
                </Link>
                <Link
                  href="/contact"
                  className="min-w-[85px] mr-[40px] lg:mr-[15px] mb-[24px] font-[600] text-[15px] leading-[28px] text-title hover:text-primary transition-all duration-300"
                >
                  {t("Contact")}
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image src="/Logo.svg" alt="me" width="125" height="50" className="lg:hidden"/>
              <div className="max-w-[437px] ml-auto mr-[40px] mb-[16px] mt-[12px] lg:m-0">
                <h4 className="font-[600] text-[16px] leading-[28px] tracking-[0.015em] text-title">
                  Viet Nam
                </h4>
                <div className="mt-[12px]">
                  <div className="flex flex-row items-center">
                    <MapPinIcon width={20} height={20} />
                    <Link
                      className="font-[400] text-[14px] leading-[20px] ml-[12px] text-sub hover:text-title"
                      href="https://www.google.com/maps/place/C%C3%B4ng+ty+c%E1%BB%95+ph%E1%BA%A7n+c%C3%B4ng+ngh%E1%BB%87+ZenS/@10.8354372,106.6675287,18z/data=!3m1!4b1!4m6!3m5!1s0x31752910902df7b1:0x92e7a55bfae26cb6!8m2!3d10.8354346!4d106.669771!16s%2Fg%2F11rt_wdk_q"
                    >
                      No. 59, Road 06, Cityland Park Hills, 10, Go Vap, Ho Chi
                      Minh
                    </Link>
                  </div>
                  <div className="flex flex-row items-center mt-[8px]">
                    <PhoneIcon width={20} height={20} />
                    <Link
                      href="tel:0974497631"
                      className="font-[400] text-[14px] leading-[20px] ml-[12px] text-sub hover:text-title"
                    >
                      0974-497-631
                    </Link>
                  </div>
                </div>
              </div>

              <div className="max-w-[437px] ml-auto mr-[40px] mb-[16px] mt-[20px] lg:m-0">
                <h4 className="font-[600] text-[16px] leading-[28px] tracking-[0.015em] text-title">
                  Japan
                </h4>
                <div className="mt-[12px]">
                  <div className="flex flex-row items-center">
                    <MapPinIcon width={20} height={20} />
                    <h5 className="font-[400] text-[14px] leading-[20px] ml-[12px] text-sub hover:text-title">
                      〒110-0005 東京都台東区上野7丁目3-9アルベルゴ上野511
                    </h5>
                  </div>
                  <div className="flex flex-row items-center mt-[8px]">
                    <PhoneIcon width={20} height={20} />
                    <Link
                      href="tel:0362317256"
                      className="font-[400] text-[14px] leading-[20px] ml-[12px] text-sub hover:text-title"
                    >
                      03-6231-7256
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-[24px] font-[600] text-[15px] leading-[28px] text-title hover:text-primary transition-all duration-300 flex items-center">
                <Mail />
                <Link href="mailto:contact@zen-s.com" className="ml-[12px]">
                  Email: contact@zen-s.com
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="font-[300] text-[11px] leading-[16px] text-primary text-center">
          Copyright © 2022 ZenS Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
