import { MapPinIcon, PhoneIcon } from "@/assets/icons";
import {
  Facebook,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "@/assets/icons/footer";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="border-t border-[#0000001a] border-solid mt-[100px] bg-[#fff]">
      <div className="xl:max-w-[1440px] mx-auto px-[168px] pb-[20px] pt-[55px]">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-[700] text-[87px] leading-[104.4px] text-secondary">
              Let’s <br /> Connect
            </h3>
            <div className="flex justify-start items-center mt-[68px]">
              <div className="mr-[20px]">
                <Facebook />
              </div>
              <div className="mr-[20px]">
                <Twitter />
              </div>
              <div className="mr-[20px]">
                <Linkedin />
              </div>
              <div className="mr-[20px]">
                <Youtube />
              </div>
            </div>
            <div className="mt-[40px]">
              <div className="flex">
                <div className="min-w-[85px] mr-[40px] mb-[24px] font-[600] text-[15px] leading-[28px] text-title">
                  About US
                </div>
                <div className="min-w-[85px] mr-[40px] mb-[24px] font-[600] text-[15px] leading-[28px] text-title">
                  Recruitment
                </div>
              </div>
              <div className="flex">
                <div className="min-w-[85px] mr-[40px] mb-[24px] font-[600] text-[15px] leading-[28px] text-title">
                  Services
                </div>
                <div className="min-w-[85px] mr-[40px] mb-[24px] font-[600] text-[15px] leading-[28px] text-title">
                  News
                </div>
              </div>
              <div className="flex">
                <div className="min-w-[85px] mr-[40px] mb-[24px] font-[600] text-[15px] leading-[28px] text-title">
                  Casestudy
                </div>
                <div className="min-w-[85px] mr-[40px] mb-[24px] font-[600] text-[15px] leading-[28px] text-title">
                  Contact
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image src="/Logo.svg" alt="me" width="125" height="50" />
              <div className="max-w-[437px] ml-auto mr-[40px] mb-[16px] mt-[12px]">
                <h4 className="font-[600] text-[16px] leading-[28px] tracking-[0.015em] text-title">
                  Viet Nam
                </h4>
                <div className="mt-[12px]">
                  <div className="flex flex-row items-center">
                    <MapPinIcon width={20} height={20} />
                    <h5 className="font-[400] text-[14px] leading-[20px] ml-[12px] text-sub">
                      No. 59, Road 06, Cityland Park Hills, 10, Go Vap, Ho Chi
                      Minh
                    </h5>
                  </div>
                  <div className="flex flex-row items-center mt-[8px]">
                    <PhoneIcon width={20} height={20} />
                    <h5 className="font-[400] text-[14px] leading-[20px] ml-[12px] text-sub">
                      0974-497-631
                    </h5>
                  </div>
                </div>
              </div>

              <div className="max-w-[437px] ml-auto mr-[40px] mb-[16px] mt-[20px]">
                <h4 className="font-[600] text-[16px] leading-[28px] tracking-[0.015em] text-title">
                  Japan
                </h4>
                <div className="mt-[12px]">
                  <div className="flex flex-row items-center">
                    <MapPinIcon width={20} height={20} />
                    <h5 className="font-[400] text-[14px] leading-[20px] ml-[12px] text-sub">
                      〒110-0005 東京都台東区上野7丁目3-9アルベルゴ上野511
                    </h5>
                  </div>
                  <div className="flex flex-row items-center mt-[8px]">
                    <PhoneIcon width={20} height={20} />
                    <h5 className="font-[400] text-[14px] leading-[20px] ml-[12px] text-sub">
                      03-6231-7256
                    </h5>
                  </div>
                </div>
              </div>
              <div className="mt-[24px] font-[600] text-[15px] leading-[28px] text-title flex items-center">
                <Mail />
                <h4 className="ml-[12px]">Email: contact@zen-s.com</h4>
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
