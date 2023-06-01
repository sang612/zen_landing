"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Banner4 } from "../Banner/Banner4";
import { Banner } from "../Banner/Banner";
import { Banner2 } from "../Banner/Banner2";
import { Banner3 } from "../Banner/Banner3";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faEnvelope,
  faFolderOpen,
  faLaptopCode,
  faNewspaper,
  faUsersRectangle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Popup from "reactjs-popup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contentStyle = {
  width: "358px",
  padding: 0,
  border: "none",
  borderRadius: "8px",
  boxShadow: "none",
};
const overlayStyle = { background: "rgba(0,0,0,0.4)" };

const hideElement = (value, type) => {
  if (type === "one") {
    const input =
      typeof document !== "undefined" && document.querySelector(value);
    if (input) input.style.opacity = 0;
  } else {
    const input =
      typeof document !== "undefined" && document.querySelectorAll(value);
    if (input) {
      for (let i = 0; i < input.length; i++) {
        input[i].style.opacity = 0;
      }
    }
  }
};

export const BigHeader = ({ setHeaderLoaded }) => {
  const [firstBannerAnimationsStarted, setFirstBannerAnimationsStarted] =
    useState(false);
  const t = useTranslations();
  const [animationsStarted, setAnimationsStarted] = useState(false);
  const [dom, setDom] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  const notify = () =>
    toast.success(`${t("Contact.Success")}`, { autoClose: 2000 });
  const notifyError = () =>
    toast.success(`${t("Contact.Error")}`, { autoClose: 2000 });

  const childSlickRef = useRef(null);

  const handleBeforeChange = useCallback(() => {
    if (childSlickRef.current && childSlickRef.current.innerSlider) {
      const target = childSlickRef.current.innerSlider.list;
      if (target && target.closest(".slick-list")) {
        return false;
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.getElementById("formToDownload");
    const formData = new FormData(form);
    fetch(
      `https://script.google.com/macros/s/AKfycbwy4JsgIQitmQYNlrowg-BQE30RDMNOgRZHEt6q5Zi-rTJSjFFyP9IF8ZwYliCk2dXr/exec`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res)
      .then((data) => {
        if (data.status === 200) {
          notify();
          window.open("/ユーザー一括登録用エクセル_Nerusoku.xlsx");
          setOpen(false);
        }
      })
      .catch((err) => {
        console.log(err);
        notifyError();
      });
  };

  const closeModal = () => setOpen(false);
  useEffect(() => {
    const handleChangeBanner = () => {
      switch (pathName) {
        case "/":
        case "/jp":
        case "/news":
        case "/jp/news":
          setFirstBannerAnimationsStarted(true);
          setAnimationsStarted(false);
          break;
        case "/services":
        case "/jp/services":
        case "/contact":
        case "/jp/contact":
          setFirstBannerAnimationsStarted(false);
          setAnimationsStarted(true);
          break;

        default:
          setAnimationsStarted(false);
          setFirstBannerAnimationsStarted(false);
          break;
      }
    };
    handleChangeBanner();
  }, [pathName]);

  useEffect(() => {
    setDom(true);
    setHeaderLoaded(true);
  }, []);

  return (
    <>
      {dom &&
        (pathName === "/" ||
          pathName === "/jp" ||
          pathName === "/news" ||
          pathName === "/jp/news") && (
          <Banner
            firstBannerAnimationsStarted={firstBannerAnimationsStarted}
            setFirstBannerAnimationsStarted={setFirstBannerAnimationsStarted}
            hideElement={hideElement}
            setOpenMobileNav={setOpenMobileNav}
            setOpen={setOpen}
          />
        )}
      {dom &&
        (pathName === "/services" ||
          pathName === "/jp/services" ||
          pathName === "/contact" ||
          pathName === "/jp/contact") && (
          <Banner2
            animationsStarted={animationsStarted}
            hideElement={hideElement}
            setOpenMobileNav={setOpenMobileNav}
            setOpen={setOpen}
          />
        )}
      {dom && (pathName === "/casestudy" || pathName === "/jp/casestudy") && (
        <Banner3 setOpenMobileNav={setOpenMobileNav} setOpen={setOpen} />
      )}
      {dom &&
        (pathName === "/recruitment" || pathName === "/jp/recruitment") && (
          <Banner4
            beforeChange={handleBeforeChange}
            slickRef={childSlickRef}
            setOpenMobileNav={setOpenMobileNav}
            setOpen={setOpen}
          />
        )}

      <div
        className={`${
          openMobileNav ? "block" : "hidden"
        }  w-full fixed left-0 top-0 h-screen  z-[9999]`}
        id="menu"
      >
        <nav className="h-full">
          <ul className="h-full z-20 text-left font-bold items-center justify-between text-base bg-[#fbfbfb] py-4 px-[30px] w-screen">
            <li
              onClick={() => setOpenMobileNav((prev) => !prev)}
              className="flex items-start justify-between mb-4"
            >
              <Link href="/">
                <Image src="/Logo.svg" alt="me" width="125" height="50" />
              </Link>
              <FontAwesomeIcon icon={faXmark} className="mr-2" />
            </li>
            <li>
              <Link
                onClick={() => setOpenMobileNav((prev) => !prev)}
                className={`py-3 px-0 block hover:text-primary ${
                  pathName === "/" || pathName === "/jp"
                    ? "text-primary bg-[#e7e7e7] pl-[10px] rounded-[8px]"
                    : "text-sub"
                }`}
                href="/"
              >
                <FontAwesomeIcon icon={faUsersRectangle} className="mr-2" />
                {t("LocaleSwitcher.AboutUs")}
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpenMobileNav((prev) => !prev)}
                className={`py-3 px-0 block hover:text-primary ${
                  pathName === "/services" || pathName === "/jp/services"
                    ? "text-primary bg-[#e7e7e7] pl-[10px] rounded-[8px]"
                    : "text-sub"
                }`}
                href="/services"
              >
                <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
                {t("LocaleSwitcher.Services")}
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpenMobileNav((prev) => !prev)}
                className={`py-3 px-0 block hover:text-primary ${
                  pathName === "/casestudy" || pathName === "/jp/casestudy"
                    ? "text-primary bg-[#e7e7e7] pl-[10px] rounded-[8px]"
                    : "text-sub"
                }`}
                href="/casestudy"
              >
                <FontAwesomeIcon icon={faFolderOpen} className="mr-2" />
                {t("LocaleSwitcher.Casestudy")}
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpenMobileNav((prev) => !prev)}
                className={`py-3 px-0 block hover:text-primary ${
                  pathName === "/recruitment" || pathName === "/jp/recruitment"
                    ? "text-primary bg-[#e7e7e7] pl-[10px] rounded-[8px]"
                    : "text-sub"
                }`}
                href="/recruitment"
              >
                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                {t("LocaleSwitcher.Recruitment")}
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpenMobileNav((prev) => !prev)}
                className={`py-3 px-0 block hover:text-primary ${
                  pathName === "/news" || pathName === "/jp/news"
                    ? "text-primary bg-[#e7e7e7] pl-[10px] rounded-[8px]"
                    : "text-sub"
                }`}
                href="/news"
              >
                <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
                {t("LocaleSwitcher.News")}
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpenMobileNav((prev) => !prev)}
                className={`py-3 px-0 block hover:text-primary ${
                  pathName === "/contact" || pathName === "/jp/contact"
                    ? "text-primary bg-[#e7e7e7] pl-[10px] rounded-[8px]"
                    : "text-sub"
                }`}
                href="/contact"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                {t("LocaleSwitcher.Contact")}
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setOpen((o) => !o);
                  setOpenMobileNav((prev) => !prev);
                }}
                className="bg-[#f67b25] p-2 rounded-md text-[18px] text-[#fff] font-bold my-3"
              >
                {t("LocaleSwitcher.Download")}
              </button>
            </li>
          </ul>
        </nav>

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
              <form id="formToDownload" onSubmit={handleSubmit}>
                <div className="flex-col items-start justify-start">
                  <input
                    type="text"
                    name="name"
                    placeholder={t("LocaleSwitcher.Name")}
                    className="placeholder:text-body placeholder:text-[15px] text-[15px] text-body outline-none w-full px-[12px] py-[11px] h-[44px] border-[1.5px] border-solid border-[#C4C4C4] rounded-[8px]"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={t("LocaleSwitcher.Email")}
                    className="mt-[20px] placeholder:text-body placeholder:text-[15px] text-[15px] text-body outline-none w-full px-[12px] py-[11px] h-[44px] border-[1.5px] border-solid border-[#C4C4C4] rounded-[8px]"
                    required
                  />
                </div>
                <div className="mt-[40px] text-center">
                  <button
                    type="submit"
                    className="w-[200px] h-[48px] rounded-[8px] px-[16px- py-[12px] bg-primary text-[#fff] text-[17px] leading-[24px] font-[600] tracking-[-0.005em]"
                  >
                    {t("LocaleSwitcher.Sent")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Popup>
        <ToastContainer />
      </div>
    </>
  );
};
