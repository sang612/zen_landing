import { FacebookIcon, GlobalIcon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Popup from "reactjs-popup";

const contentStyle = {
  width: "358px",
  padding: 0,
  border: "none",
  borderRadius: "8px",
  boxShadow: "none",
};
const overlayStyle = { background: "rgba(0,0,0,0.4)" };

export const Header = ({ showLogo, showButtonGroup }) => {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    locale == "en" ? "English" : "日本語"
  );
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const pathName = usePathname();
  const router = useRouter();
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language == "en" ? "English" : "日本語");
    setIsOpen(false);
    let newPathname;
    if (pathName.includes("/jp")) {
      newPathname = pathName.replace(`/jp`, `/${language}`);
    } else {
      newPathname = "/jp" + pathName;
    }
    router.replace(newPathname);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const t = useTranslations("LocaleSwitcher");
  const otherLocale = locale === "en" ? "jp" : "en";

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
            <Link
              href="/contact"
              className="text-center p-[16px] min-w-[145px] h-[48px] bg-[#ffffff] text-[#005D6C] text-[14px] font-[600] leading-[16px] tracking-[0.5px] uppercase"
            >
              {t("ContactNow")}
            </Link>
            <button className="text-center ml-[27px] p-[16px] w-[145px] h-[48px] bg-opacity-0 text-[#ffffff] outline outline-[1px] outline-[#ffffff] text-[14px] font-[600] leading-[16px] tracking-[0.5px] uppercase">
              {t("LearnMore")}
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-row">
          <button
            onClick={() => setOpen((o) => !o)}
            className="bg-primary p-1 rounded-md text-[9px] text-[#fff] font-bold"
          >
            {t("Download")}
          </button>
          <Link
            href="https://www.facebook.com/zens.company/"
            className="ml-[20px]"
          >
            <FacebookIcon width={28} height={28} />
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
              className="absolute left-0 mt-[8px] py-2 rounded-md shadow-lg bg-[#fff]"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li>
                <div
                  className="flex flex-row items-center px-4 w-full text-left hover:cursor-pointer"
                  role="menuitem"
                  onClick={() => handleLanguageChange(otherLocale)}
                >
                  <GlobalIcon width={16} height={16} />
                  <span className="ml-3 whitespace-nowrap">
                    {t("switchLocale", { locale: otherLocale })}
                  </span>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
      <Popup
        open={open}
        closeOnDocumentClick
        onClose={closeModal}
        position="center center"
        {...{ contentStyle, overlayStyle }}
        modal
        nested
      >
        <div className="modal">
          <div className="bg-[#fff] rounded-[8px] px-[28px] pb-[40px]">
            <div
              className="close pt-[20px] mb-[20px] hover:cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </div>
            <form>
              <div className="flex-col items-start justify-start">
                <input
                  type="text"
                  placeholder={t("Name")}
                  className="placeholder:text-body placeholder:text-[15px] text-[15px] text-body outline-none w-full px-[12px] py-[11px] h-[44px] border-[1.5px] border-solid border-[#C4C4C4] rounded-[8px]"
                  required
                />
                <input
                  type="email"
                  placeholder={t("Email")}
                  className="mt-[20px] placeholder:text-body placeholder:text-[15px] text-[15px] text-body outline-none w-full px-[12px] py-[11px] h-[44px] border-[1.5px] border-solid border-[#C4C4C4] rounded-[8px]"
                  required
                />
              </div>
              <div className="mt-[40px] text-center">
                <button
                  type="submit"
                  className="w-[200px] h-[48px] rounded-[8px] px-[16px- py-[12px] bg-primary text-[#fff] text-[17px] leading-[24px] font-[600] tracking-[-0.005em]"
                >
                  {t("Sent")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Popup>
    </div>
  );
};
