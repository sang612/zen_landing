"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Banner4 } from "../Banner/Banner4";
import { Banner } from "../Banner/Banner";
import { Banner2 } from "../Banner/Banner2";
import { Banner3 } from "../Banner/Banner3";
import { useCallback, useRef, useState } from "react";
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

const contentStyle = {
  width: "358px",
  padding: 0,
  border: "none",
  borderRadius: "8px",
  boxShadow: "none",
};
const overlayStyle = { background: "rgba(0,0,0,0.4)" };

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  pauseOnHover: false,
  pauseOnFocus: false,
  autoplaySpeed: 6000,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
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

export const BigHeader = () => {
	const [firstBannerAnimationsStarted, setFirstBannerAnimationsStarted] =
		useState(false);
	const [animationsStarted, setAnimationsStarted] = useState(false);

	const parentSlickRef = useRef(null);
	const childSlickRef = useRef(null);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleBeforeChange = useCallback(() => {
		if (childSlickRef.current && childSlickRef.current.innerSlider) {
			const target = childSlickRef.current.innerSlider.list;
			if (target && target.closest(".slick-list")) {
				return false;
			}
		}
	}, []);

	const handleAfterChange = (currentSlide) => {
		switch (currentSlide) {
			case 0:
				setFirstBannerAnimationsStarted(true);
				setAnimationsStarted(false);
				break;
			case 1:
				setFirstBannerAnimationsStarted(false);
				setAnimationsStarted(true);
				break;
			case 2:
				setFirstBannerAnimationsStarted(false);
				setAnimationsStarted(false);
				break;
			case 3:
				setFirstBannerAnimationsStarted(false);
				setAnimationsStarted(false);
				break;
			default:
				setAnimationsStarted(false);
				setFirstBannerAnimationsStarted(false);
				break;
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formaData = {
			name,
			email,
		};

		const rs = fetch(`/api/submitGGSheet`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formaData),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("data", data);
				if (data.data.status === 200) {
					window.open("/ユーザー一括登録用エクセル_Nerusoku.xlsx");
					setOpen(false);
					setName("");
					setEmail("");
				}
			});
	};

	const [openMobileNav, setOpenMobileNav] = useState(false);
	const pathName = usePathname();
	const t = useTranslations("LocaleSwitcher");
	const [open, setOpen] = useState(false);
	const closeModal = () => setOpen(false);

	return (
		<>
			<Slider
				{...settings}
				afterChange={handleAfterChange}
				ref={parentSlickRef}
				beforeChange={handleBeforeChange}
				className="overflow-hidden"
			>
				<Banner
					firstBannerAnimationsStarted={firstBannerAnimationsStarted}
					setFirstBannerAnimationsStarted={setFirstBannerAnimationsStarted}
					hideElement={hideElement}
					setOpenMobileNav={setOpenMobileNav}
					setOpen={setOpen}
				/>
				<Banner2
					animationsStarted={animationsStarted}
					hideElement={hideElement}
					setOpenMobileNav={setOpenMobileNav}
					setOpen={setOpen}
				/>
				<Banner3 setOpenMobileNav={setOpenMobileNav} setOpen={setOpen} />
				<Banner4
					beforeChange={handleBeforeChange}
					slickRef={childSlickRef}
					setOpenMobileNav={setOpenMobileNav}
					setOpen={setOpen}
				/>
			</Slider>
			<div
				className={`${
					openMobileNav ? "block" : "hidden"
				} lg:flex lg:items-center lg:w-auto w-full fixed left-0 top-0 h-screen  z-[9999]`}
				id="menu"
			>
				<nav className="h-full">
					<ul className="h-full z-20 lg:flex text-left font-bold items-center justify-between text-base bg-[#fbfbfb] py-4 px-[30px] lg:pt-0 w-screen">
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
								className={`py-3 px-0 block hover:text-primary ${
									pathName === "/" || pathName === "/jp"
										? "text-primary bg-[#e7e7e7] pl-[10px] rounded-[8px]"
										: "text-title"
								}`}
								href="/"
							>
								<FontAwesomeIcon icon={faUsersRectangle} className="mr-2" />
								{t("AboutUs")}
							</Link>
						</li>
						<li>
							<Link
								className={`py-3 px-0 block hover:text-primary ${
									pathName === "/services" || pathName === "/jp/services"
										? "text-primary bg-[#e7e7e7] pl-[10px] rounded-[8px]"
										: "text-title"
								}`}
								href="/services"
							>
								<FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
								{t("Services")}
							</Link>
						</li>
						<li>
							<Link
								className={`py-3 px-0 block hover:text-primary ${
									pathName === "/casestudy" || pathName === "/jp/casestudy"
										? "text-primary bg-[#e7e7e7] pl-[10px] rounded-[8px]"
										: "text-title"
								}`}
								href="/casestudy"
							>
								<FontAwesomeIcon icon={faFolderOpen} className="mr-2" />
								{t("Casestudy")}
							</Link>
						</li>
						<li>
							<Link
								className={`py-3 px-0 block hover:text-primary ${
									pathName === "/recruitment" || pathName === "/jp/recruitment"
										? "text-primary bg-[#e7e7e7] pl-[10px] rounded-[8px]"
										: "text-title"
								}`}
								href="/recruitment"
							>
								<FontAwesomeIcon icon={faBriefcase} className="mr-2" />
								{t("Recruitment")}
							</Link>
						</li>
						<li>
							<Link
								className={`py-3 px-0 block hover:text-primary ${
									pathName === "/news" || pathName === "/jp/news"
										? "text-primary bg-[#e7e7e7] pl-[10px] rounded-[8px]"
										: "text-title"
								}`}
								href="/news"
							>
								<FontAwesomeIcon icon={faNewspaper} className="mr-2" />
								{t("News")}
							</Link>
						</li>
						<li>
							<Link
								className={`py-3 px-0 block hover:text-primary ${
									pathName === "/contact" || pathName === "/jp/contact"
										? "text-primary bg-[#e7e7e7] pl-[10px] rounded-[8px]"
										: "text-title"
								}`}
								href="/contact"
							>
								<FontAwesomeIcon icon={faEnvelope} className="mr-2" />
								{t("Contact")}
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
								{t("Download")}
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
							<form onSubmit={handleSubmit}>
								<div className="flex-col items-start justify-start">
									<input
										type="text"
										placeholder={t("Name")}
										className="placeholder:text-body placeholder:text-[15px] text-[15px] text-body outline-none w-full px-[12px] py-[11px] h-[44px] border-[1.5px] border-solid border-[#C4C4C4] rounded-[8px]"
										required
										onChange={(e) => setName(e.target.value)}
									/>
									<input
										type="email"
										placeholder={t("Email")}
										className="mt-[20px] placeholder:text-body placeholder:text-[15px] text-[15px] text-body outline-none w-full px-[12px] py-[11px] h-[44px] border-[1.5px] border-solid border-[#C4C4C4] rounded-[8px]"
										required
										onChange={(e) => setEmail(e.target.value)}
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
		</>
	);
};
