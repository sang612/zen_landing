/* eslint-disable no-mixed-spaces-and-tabs */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Navbar = () => {
	const pathName = usePathname();
	const [stickyClass, setStickyClass] = useState("relative h-[32px]");

	const stickNavbar = () => {
		if (window !== undefined) {
			let windowHeight = window.scrollY;
			windowHeight > 800
				? setStickyClass(
						"fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-[#fff] w-full p-5 h-[100px] shadow-sm"
				  )
				: setStickyClass("relative h-[32px]");
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", stickNavbar);

		return () => {
			window.removeEventListener("scroll", stickNavbar);
		};
	}, []);
	return (
		<div className="h-[100px]">
			<nav
				className={`flex items-center justify-center mb-[100px] transition-[height] ease-in-out duration-500 ${stickyClass}`}
			>
				<Link
					href="/"
					className={`${
						pathName === "/"
							? "font-[600] text-primary after:absolute after:bottom-[-2px] after:left-0 after:content-[''] after:rounded-[2px] after:w-full after:h-[2px] after:bg-primary"
							: "font-[400] text-body after:w-0"
					} relative text-[19px] leading-[32px] mr-[60px] flex-shrink-0 
          hover:text-primary hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0 hover:after:content-[''] hover:after:rounded-[2px] hover:after:w-full hover:after:h-[2px] hover:after:bg-primary after:transition-[width] after:duration-300`}
				>
					About Us
				</Link>
				<Link
					href="/services"
					className={`${
						pathName === "/services"
							? "font-[600] text-primary after:absolute after:bottom-[-2px] after:left-0 after:content-[''] after:rounded-[2px] after:w-full after:h-[2px] after:bg-primary"
							: "font-[400] text-body after:w-0"
					} relative text-[19px] leading-[32px] mr-[60px] flex-shrink-0
          hover:text-primary hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0 hover:after:content-[''] hover:after:rounded-[2px] hover:after:w-full hover:after:h-[2px] hover:after:bg-primary after:transition-[width] after:duration-300`}
				>
					Services
				</Link>
				<Link
					href="/casestudy"
					className={`${
						pathName === "/casestudy"
							? "font-[600] text-primary after:absolute after:bottom-[-2px] after:left-0 after:content-[''] after:rounded-[2px] after:w-full after:h-[2px] after:bg-primary"
							: "font-[400] text-body after:w-0"
					} relative text-[19px] leading-[32px] mr-[60px] flex-shrink-0
          hover:text-primary hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0 hover:after:content-[''] hover:after:rounded-[2px] hover:after:w-full hover:after:h-[2px] hover:after:bg-primary after:transition-[width] after:duration-300`}
				>
					Casestudy
				</Link>
				<Link
					href="/recruitment"
					className={`${
						pathName === "/recruitment"
							? "font-[600] text-primary after:absolute after:bottom-[-2px] after:left-0 after:content-[''] after:rounded-[2px] after:w-full after:h-[2px] after:bg-primary"
							: "font-[400] text-body after:w-0"
					} relative text-[19px] leading-[32px] mr-[60px] flex-shrink-0
          hover:text-primary hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0 hover:after:content-[''] hover:after:rounded-[2px] hover:after:w-full hover:after:h-[2px] hover:after:bg-primary after:transition-[width] after:duration-300`}
				>
					Recruitment
				</Link>
				<Link
					href="/news"
					className={`${
						pathName === "/news"
							? "font-[600] text-primary after:absolute after:bottom-[-2px] after:left-0 after:content-[''] after:rounded-[2px] after:w-full after:h-[2px] after:bg-primary"
							: "font-[400] text-body after:w-0"
					} relative text-[19px] leading-[32px] mr-[60px] flex-shrink-0
          hover:text-primary hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0 hover:after:content-[''] hover:after:rounded-[2px] hover:after:w-full hover:after:h-[2px] hover:after:bg-primary after:transition-[width] after:duration-300`}
				>
					News
				</Link>
				<Link
					href="/contact"
					className={`${
						pathName === "/contact"
							? "font-[600] text-primary after:absolute after:bottom-[-2px] after:left-0 after:content-[''] after:rounded-[2px] after:w-full after:h-[2px] after:bg-primary"
							: "font-[400] text-body after:w-0"
					} relative text-[19px] leading-[32px] mr-[60px] flex-shrink-0
          hover:text-primary hover:after:absolute hover:after:bottom-[-2px] hover:after:left-0 hover:after:content-[''] hover:after:rounded-[2px] hover:after:w-full hover:after:h-[2px] hover:after:bg-primary after:transition-[width] after:duration-300
          `}
				>
					Contact
				</Link>
			</nav>
		</div>
	);
};
