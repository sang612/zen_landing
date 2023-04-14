"use client"

import { useTranslations } from "next-intl";
import "../../../pages/styles/globals.css";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <div className="relative xl:max-w-[1440px]">
      <div className="mx-auto max-w-[914px] px-[28px] py-[40px] rounded-[16px] shadow-[0px_20px_20px_#0000000d] bg-[#fff]">
        <form>
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder={t("Name")}
              className="placeholder:text-body placeholder:text-[15px] text-[15px] text-body outline-none w-full px-[12px] py-[11px] h-[44px] border-[1.5px] border-solid border-[#C4C4C4] rounded-[8px]"
              required
            />
            <input
              type="email"
              placeholder={t("Email")}
              className="ml-[20px] placeholder:text-body placeholder:text-[15px] text-[15px] text-body outline-none w-full px-[12px] py-[11px] h-[44px] border-[1.5px] border-solid border-[#C4C4C4] rounded-[8px]"
              required
            />
          </div>
          <input
            type="text"
            placeholder={t("Subject")}
            className="my-[20px] placeholder:text-body placeholder:text-[15px] text-[15px] text-body outline-none w-full px-[12px] py-[11px] h-[44px] border-[1.5px] border-solid border-[#C4C4C4] rounded-[8px]"
            required
          />
          <textarea
            type="text"
            placeholder={t("Messenger")}
            className="placeholder:text-body placeholder:text-[15px] text-[15px] text-body outline-none w-full px-[12px] py-[11px] h-[148px] border-[1.5px] border-solid border-[#C4C4C4] rounded-[8px]"
            required
          />
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
  );
}
