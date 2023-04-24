/* eslint-disable no-mixed-spaces-and-tabs */
"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";

const contentStyle = {
	width: "358px",
	padding: 0,
	border: "none",
	borderRadius: "8px",
	boxShadow: "none",
};
const overlayStyle = { background: "rgba(0,0,0,0.4)" };

export const Navbar = () => {
	const pathName = usePathname();
	const [stickyClass, setStickyClass] = useState("relative h-[32px]");
	const [buttonClass, setButtonClass] = useState("hidden");
	const [open, setOpen] = useState(false);
	const closeModal = () => setOpen(false);

	const stickNavbar = () => {
		if (window !== undefined) {
			let windowHeight = window.scrollY;
			if (windowHeight > 800) {
				setStickyClass(
					"fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-[#fff] w-full p-5 h-[100px] shadow-md lg:pr-[200px]"
				);
				setButtonClass("flex");
			} else {
				setStickyClass("relative h-[32px]");
				setButtonClass("hidden");
			}
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", stickNavbar);

		return () => {
			window.removeEventListener("scroll", stickNavbar);
		};
	}, []);

	const t = useTranslations("Nav");
	return (
		<div className="lg:hidden h-[100px] flex justify-center items-center">
			<nav
				className={`flex flex-wrap items-center justify-center mb-[100px] transition-[height] ease-in-out duration-500 ${stickyClass}`}
			>
				<Link href="/" className="lg:w-[17%]">
					<Image
						src="/Logo.svg"
						alt="me"
						width="125"
						height="50"
						className={`absolute left-[30px] top-[30px] ${buttonClass}`}
					/>
				</Link>
				<Link
					href="/"
					className={`${
						pathName === "/" || pathName === "/jp"
							? "font-[600] text-primary after:absolute after:bottom-[-2px] after:left-0 after:content-[''] after:rounded-[2px] after:w-full after:h-[2px] after:bg-primary"
							: "font-[400] text-body after:w-0"
					} relative text-[19px] leading-[32px] mr-[60px] flex-shrink-0 
          hover:text-primary hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0 hover:after:content-[''] hover:after:rounded-[2px] hover:after:w-full hover:after:h-[2px] hover:after:bg-primary after:transition-[width] after:duration-300`}
				>
					{t("AboutUs")}
				</Link>
				<Link
					href="/services"
					className={`${
						pathName === "/services" || pathName === "/jp/services"
							? "font-[600] text-primary after:absolute after:bottom-[-2px] after:left-0 after:content-[''] after:rounded-[2px] after:w-full after:h-[2px] after:bg-primary"
							: "font-[400] text-body after:w-0"
					} relative text-[19px] leading-[32px] mr-[60px] flex-shrink-0
          hover:text-primary hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0 hover:after:content-[''] hover:after:rounded-[2px] hover:after:w-full hover:after:h-[2px] hover:after:bg-primary after:transition-[width] after:duration-300`}
				>
					{t("Services")}
				</Link>
				<Link
					href="/casestudy"
					className={`${
						pathName === "/casestudy" || pathName === "/jp/casestudy"
							? "font-[600] text-primary after:absolute after:bottom-[-2px] after:left-0 after:content-[''] after:rounded-[2px] after:w-full after:h-[2px] after:bg-primary"
							: "font-[400] text-body after:w-0"
					} relative text-[19px] leading-[32px] mr-[60px] flex-shrink-0
          hover:text-primary hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0 hover:after:content-[''] hover:after:rounded-[2px] hover:after:w-full hover:after:h-[2px] hover:after:bg-primary after:transition-[width] after:duration-300`}
				>
					{t("Casestudy")}
				</Link>
				<Link
					href="/recruitment"
					className={`${
						pathName === "/recruitment" || pathName === "/jp/recruitment"
							? "font-[600] text-primary after:absolute after:bottom-[-2px] after:left-0 after:content-[''] after:rounded-[2px] after:w-full after:h-[2px] after:bg-primary"
							: "font-[400] text-body after:w-0"
					} relative text-[19px] leading-[32px] mr-[60px] flex-shrink-0
          hover:text-primary hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0 hover:after:content-[''] hover:after:rounded-[2px] hover:after:w-full hover:after:h-[2px] hover:after:bg-primary after:transition-[width] after:duration-300`}
				>
					{t("Recruitment")}
				</Link>
				<Link
					href="/news"
					className={`${
						pathName === "/news" || pathName === "/jp/news"
							? "font-[600] text-primary after:absolute after:bottom-[-2px] after:left-0 after:content-[''] after:rounded-[2px] after:w-full after:h-[2px] after:bg-primary"
							: "font-[400] text-body after:w-0"
					} relative text-[19px] leading-[32px] mr-[60px] flex-shrink-0
          hover:text-primary hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0 hover:after:content-[''] hover:after:rounded-[2px] hover:after:w-full hover:after:h-[2px] hover:after:bg-primary after:transition-[width] after:duration-300`}
				>
					{t("News")}
				</Link>
				<Link
					href="/contact"
					className={`${
						pathName === "/contact" || pathName === "/jp/contact"
							? "font-[600] text-primary after:absolute after:bottom-[-2px] after:left-0 after:content-[''] after:rounded-[2px] after:w-full after:h-[2px] after:bg-primary"
							: "font-[400] text-body after:w-0"
					} relative text-[19px] leading-[32px] mr-[60px] flex-shrink-0
          hover:text-primary hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0 hover:after:content-[''] hover:after:rounded-[2px] hover:after:w-full hover:after:h-[2px] hover:after:bg-primary after:transition-[width] after:duration-300
          `}
				>
					{t("Contact")}
				</Link>
				<button
					onClick={() => setOpen((o) => !o)}
					className={`absolute right-10 flex justify-center align-center bg-[#f67b25] p-4 w-[200px] height-[50px] rounded-md text-[16px] text-[#ffffff] font-bold ${buttonClass}`}
				>
					{t("Download")}
				</button>
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
