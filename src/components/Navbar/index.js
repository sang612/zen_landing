"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="flex items-center justify-center mb-[100px]">
      <Link
        href="/about-us"
        className={`${
          pathName === "/about-us"
            ? "font-[600] text-primary after:absolute after:bottom-[-2px] after:left-0 after:content-[''] after:rounded-[2px] after:w-full after:h-[2px] after:bg-primary"
            : "font-[400] text-body"
        } relative text-[19px] leading-[32px] mr-[60px]`}
      >
        About Us
      </Link>
      <Link
        href="/services"
        className={`${
          pathName === "/services"
            ? "font-[600] text-primary after:absolute after:bottom-[-2px] after:left-0 after:content-[''] after:rounded-[2px] after:w-full after:h-[2px] after:bg-primary"
            : "font-[400] text-body"
        } relative text-[19px] leading-[32px] mr-[60px]`}
      >
        Services
      </Link>
      <Link
        href="/casestudy"
        className={`${
          pathName === "/casestudy"
            ? "font-[600] text-primary after:absolute after:bottom-[-2px] after:left-0 after:content-[''] after:rounded-[2px] after:w-full after:h-[2px] after:bg-primary"
            : "font-[400] text-body"
        } relative text-[19px] leading-[32px] mr-[60px]`}
      >
        Casestudy
      </Link>
      <Link
        href="/recruitment"
        className={`${
          pathName === "/recruitment"
            ? "font-[600] text-primary after:absolute after:bottom-[-2px] after:left-0 after:content-[''] after:rounded-[2px] after:w-full after:h-[2px] after:bg-primary"
            : "font-[400] text-body"
        } relative text-[19px] leading-[32px] mr-[60px]`}
      >
        Recruitment
      </Link>
      <Link
        href="/news"
        className={`${
          pathName === "/news"
            ? "font-[600] text-primary after:absolute after:bottom-[-2px] after:left-0 after:content-[''] after:rounded-[2px] after:w-full after:h-[2px] after:bg-primary"
            : "font-[400] text-body"
        } relative text-[19px] leading-[32px] mr-[60px]`}
      >
        News
      </Link>
      <Link
        href="/contact"
        className={`${
          pathName === "/contact"
            ? "font-[600] text-primary after:absolute after:bottom-[-2px] after:left-0 after:content-[''] after:rounded-[2px] after:w-full after:h-[2px] after:bg-primary"
            : "font-[400] text-body"
        } relative text-[19px] leading-[32px] mr-[60px]`}
      >
        Contact
      </Link>
    </nav>
  );
};
