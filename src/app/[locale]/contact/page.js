"use client";

import { useTranslations } from "next-intl";
import "../../../pages/styles/globals.css";
import { useState } from "react";
import { sendContactForm } from "@/lib/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactPage() {
  const t = useTranslations("Contact");
  const [inputs, setInputs] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const notify = () => toast.success(`${t("Success")}`, { autoClose: 2000 });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    const form = document.getElementById("my_form");
    try {
      await sendContactForm(inputs);
      form.reset();
      notify();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <div className="relative xl:max-w-[1440px]">
      <div className="mx-auto max-w-[914px] px-[28px] py-[40px] rounded-[16px] shadow-[0px_20px_20px_#0000000d] bg-[#fff]">
        <form id="my_form" onSubmit={handleSubmit}>
          <div className="flex items-center justify-center">
            <input
              onChange={handleChange}
              type="text"
              name="name"
              placeholder={t("Name")}
              className="placeholder:text-body placeholder:text-[15px] text-[15px] text-body outline-none w-full px-[12px] py-[11px] h-[44px] border-[1.5px] border-solid border-[#C4C4C4] rounded-[8px]"
              required
            />
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder={t("Email")}
              className="ml-[20px] placeholder:text-body placeholder:text-[15px] text-[15px] text-body outline-none w-full px-[12px] py-[11px] h-[44px] border-[1.5px] border-solid border-[#C4C4C4] rounded-[8px]"
              required
            />
          </div>
          <input
            onChange={handleChange}
            type="text"
            name="subject"
            placeholder={t("Subject")}
            className="my-[20px] placeholder:text-body placeholder:text-[15px] text-[15px] text-body outline-none w-full px-[12px] py-[11px] h-[44px] border-[1.5px] border-solid border-[#C4C4C4] rounded-[8px]"
            required
          />
          <textarea
            onChange={handleChange}
            type="text"
            name="message"
            placeholder={t("Message")}
            className="placeholder:text-body placeholder:text-[15px] text-[15px] text-body outline-none w-full px-[12px] py-[11px] h-[148px] border-[1.5px] border-solid border-[#C4C4C4] rounded-[8px]"
            required
          />
          <div className="mt-[40px] text-center">
            <button
              type="submit"
              className="w-[200px] h-[48px] rounded-[8px] px-[16px- py-[12px] bg-primary transition-colors duration-300 hover:bg-black text-[#fff] text-[17px] leading-[24px] font-[600] tracking-[-0.005em]"
            >
              <div className="flex items-center justify-center">
                {t("Sent")}
                {isLoading && (
                  <>
                    ...
                    <svg
                      className="animate-spin ml-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </>
                )}
              </div>
            </button>
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}
