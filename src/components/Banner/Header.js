import {
  FacebookIcon,
  GlobalIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Header = ({ showLogo, showButtonGroup }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="pt-[28px] px-[80px] flex flex-row justify-between items-center relative z-10">
      <div className="flex flex-row items-center">
        {showLogo && (
          <Link href="/">
            <Image src="/Logo.svg" alt="me" width="125" height="50" />
          </Link>
        )}
        {showButtonGroup && (
          <div className="ml-[44px] flex flex-row">
            <Link href='/contact' className="p-[16px] w-[145px] h-[48px] bg-[#ffffff] text-[#005D6C] text-[14px] font-[600] leading-[16px] tracking-[0.5px] uppercase">
              CONTACT NOW
            </Link>
            <button className="ml-[27px] p-[16px] w-[145px] h-[48px] bg-opacity-0 text-[#ffffff] outline outline-[1px] outline-[#ffffff] text-[14px] font-[600] leading-[16px] tracking-[0.5px] uppercase">
              LEARN MORE
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-row">
          <Link
            href="https://www.facebook.com/zens.company/"
            className="ml-[20px]"
          >
            <FacebookIcon width={28} height={28} />
          </Link>
          <Link href="" className="ml-[20px]">
            <TwitterIcon width={28} height={28} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/zens-technology-company-limited/about/"
            className="ml-[20px]"
          >
            <LinkedinIcon width={28} height={28} />
          </Link>
          <Link href="" className="ml-[20px]">
            <YoutubeIcon width={28} height={28} />
          </Link>
        </div>
        <div className="relative ml-[56px]">
          <button
            className="flex flex-row items-center outline-none focus:outline-none"
            type="button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            <div>
              <GlobalIcon width={16} height={16} />
            </div>
            <h4 className="ml-[14px] font-[400] text-[14px] leading-[16px] tracking-[0.5px] text-[#314753]">
              {selectedLanguage}
            </h4>
          </button>
          {isOpen && (
            <ul
              className="absolute left-0 mt-[8px] py-2 rounded-md shadow-lg"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li>
                <button
                  className="flex flex-row items-center px-4 py-2 w-full text-left hover:bg-gray-100"
                  role="menuitem"
                  onClick={() => handleLanguageChange("English")}
                >
                  <GlobalIcon width={16} height={16} />
                  <span className="ml-3 whitespace-nowrap">English</span>
                </button>
              </li>
              <li>
                <button
                  className="flex flex-row items-center px-4 py-2 w-full text-left hover:bg-gray-100"
                  role="menuitem"
                  onClick={() => handleLanguageChange("Việt Nam")}
                >
                  <GlobalIcon width={16} height={16} />
                  <span className="ml-3 whitespace-nowrap">Việt Nam</span>
                </button>
              </li>
              <li>
                <button
                  className="flex flex-row items-center px-4 py-2 w-full text-left hover:bg-gray-100"
                  role="menuitem"
                  onClick={() => handleLanguageChange("Japanese")}
                >
                  <GlobalIcon width={16} height={16} />
                  <span className="ml-3 whitespace-nowrap">Japanese</span>
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
