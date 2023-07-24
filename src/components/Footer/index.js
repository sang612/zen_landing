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

const goToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

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
                  onClick={goToTop}
                  href="/"
                  className="min-w-[85px] mr-[40px] lg:mr-[15px] mb-[24px] font-[600] text-[15px] leading-[28px] text-sub hover:text-primary transition-all duration-300"
                >
                  {t("AboutUs")}
                </Link>
                <Link
                  onClick={goToTop}
                  href="/recruitment"
                  className="min-w-[85px] mr-[40px] lg:mr-[15px] mb-[24px] font-[600] text-[15px] leading-[28px] text-sub hover:text-primary transition-all duration-300"
                >
                  {t("Recruitment")}
                </Link>
              </div>
              <div className="flex lg:justify-center lg:text-center">
                <Link
                  onClick={goToTop}
                  href="/services"
                  className="min-w-[85px] mr-[40px] lg:mr-[15px] mb-[24px] font-[600] text-[15px] leading-[28px] text-sub hover:text-primary transition-all duration-300"
                >
                  {t("Services")}
                </Link>
                <Link
                  onClick={goToTop}
                  href="/news"
                  className="min-w-[85px] mr-[40px] lg:mr-[15px] mb-[24px] font-[600] text-[15px] leading-[28px] text-sub hover:text-primary transition-all duration-300"
                >
                  {t("News")}
                </Link>
              </div>
              <div className="flex lg:justify-center lg:text-center">
                <Link
                  onClick={goToTop}
                  href="/casestudy"
                  className="min-w-[85px] mr-[40px] lg:mr-[15px] mb-[24px] font-[600] text-[15px] leading-[28px] text-sub hover:text-primary transition-all duration-300"
                >
                  {t("Casestudy")}
                </Link>
                <Link
                  onClick={goToTop}
                  href="/contact"
                  className="min-w-[85px] mr-[40px] lg:mr-[15px] mb-[24px] font-[600] text-[15px] leading-[28px] text-sub hover:text-primary transition-all duration-300"
                >
                  {t("Contact")}
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/Logo.svg"
                alt="me"
                width="125"
                height="50"
                className="lg:hidden"
              />
              <div className="max-w-[437px] ml-auto mr-[40px] mb-[16px] mt-[12px] lg:m-0">
                <h4 className="font-[600] text-[16px] leading-[28px] tracking-[0.015em] text-sub">
                  Viet Nam
                </h4>
                <div className="mt-[12px]">
                  <div className="flex flex-row items-center">
                    <MapPinIcon width={20} height={20} />
                    <div>
                      <Link
                        className="font-[400] text-[14px] ml-[12px] text-sub hover:text-sub block"
                        href="https://goo.gl/maps/3YCQJswd9vf6C4VT9"
                      >
                        Headquarter: No. 59, Road 06, Cityland Park Hills, 10,
                        Go Vap, Ho Chi Minh
                      </Link>
                      <Link
                        className="font-[400] text-[14px] ml-[12px] text-sub hover:text-sub block"
                        href="https://goo.gl/maps/utSFuUnWFdbCcqiF8"
                      >
                        Branch Company: No 20, Street 34, Van Phuc City,
                        National Road #13, Hiep Binh Phuoc Ward, Thu Duc City,
                        Ho Chi Minh City
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-row items-center mt-[8px]">
                    <PhoneIcon width={20} height={20} />
                    <Link
                      href="tel:0974497631"
                      className="font-[400] text-[14px] leading-[20px] ml-[12px] text-sub hover:text-sub"
                    >
                      0974-497-631
                    </Link>
                  </div>
                </div>
              </div>

              <div className="max-w-[437px] ml-auto mr-[40px] mb-[16px] mt-[20px] lg:m-0 sm:mt-4">
                <h4 className="font-[600] text-[16px] leading-[28px] tracking-[0.015em] text-sub">
                  Japan
                </h4>
                <div className="mt-[12px]">
                  <div className="flex flex-row items-center">
                    <MapPinIcon width={20} height={20} />
                    <h5 className="font-[400] text-[14px] ml-[12px] text-sub hover:text-sub">
                      〒110-0005 東京都台東区上野7丁目3-9アルベルゴ上野511
                    </h5>
                  </div>
                  <div className="flex flex-row items-center mt-[8px]">
                    <PhoneIcon width={20} height={20} />
                    <Link
                      href="tel:0362317256"
                      className="font-[400] text-[14px] leading-[20px] ml-[12px] text-sub hover:text-sub"
                    >
                      03-6231-7256
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-[24px] font-[600] text-[15px] leading-[28px] text-sub hover:text-primary transition-all duration-300 flex items-center">
                <Mail />
                <Link href="mailto:contact@zen-s.com" className="ml-[12px]">
                  Email: contact@zen-s.com
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="font-[300] text-[11px] leading-[16px] text-primary text-center">
          Copyright © 2023 ZenS Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
