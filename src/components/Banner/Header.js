import {
  FacebookIcon,
  GlobalIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/assets/icons";
import Image from "next/image";

export const Header = ({ showLogo, showButtonGroup }) => {
  return (
    <div className="pt-[28px] px-[80px] flex flex-row justify-between items-center relative z-10">
      <div className="flex flex-row items-center">
        {showLogo && (
          <div>
            <Image src="/Logo.svg" alt="me" width="125" height="50" />
          </div>
        )}
        {showButtonGroup && (
          <div className="ml-[44px] flex flex-row">
            <button className="p-[16px] w-[145px] h-[48px] bg-[#ffffff] text-[#005D6C] text-[14px] font-[600] leading-[16px] tracking-[0.5px] uppercase">
              CONTACT NOW
            </button>
            <button className="ml-[27px] p-[16px] w-[145px] h-[48px] bg-opacity-0 text-[#ffffff] outline outline-[1px] outline-[#ffffff] text-[14px] font-[600] leading-[16px] tracking-[0.5px] uppercase">
              LEARN MORE
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row">
          <div className="ml-[20px]">
            <FacebookIcon width={28} height={28} />
          </div>
          <div className="ml-[20px]">
            <TwitterIcon width={28} height={28} />
          </div>
          <div className="ml-[20px]">
            <LinkedinIcon width={28} height={28} />
          </div>
          <div className="ml-[20px]">
            <YoutubeIcon width={28} height={28} />
          </div>
        </div>
        <div className="flex flex-row items-center ml-[56px]">
          <div>
            <GlobalIcon width={16} height={16} />
          </div>
          <h4 className="ml-[14px] font-[400] text-[14px] leading-[16px] tracking-[0.5px] text-[#314753]">
            English
          </h4>
        </div>
      </div>
    </div>
  );
};
