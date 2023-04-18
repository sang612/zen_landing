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
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
		<div className="pt-[28px] sm:px-[10px] px-[80px] flex flex-row justify-between items-center relative z-10">
			<div className="flex flex-row items-center sm:hidden">
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
			<div className="flex flex-row items-center sm:hidden">
				<div className="flex flex-row gap-5">
					<Link
						href="https://www.facebook.com/zens.company/"
						className="ml-[20px]"
					>
						<FacebookIcon width={28} height={28} />
					</Link>
					<button
						onClick={() => setOpen((o) => !o)}
						className="bg-[#f67b25] p-1 rounded-md text-[9px] text-[#fff] font-bold"
					>
						{t("Download")}
					</button>
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

			<div className="hidden sm:block z-20 w-full">
				<div className="relative">
					<div className="flex justify-between items-center w-full">
						<Link href="/">
							<Image src="/Logo.svg" alt="me" width="125" height="50" />
						</Link>
						<label
							htmlFor="menu-toggle"
							className="pointer-cursor lg:hidden block "
							onClick={() => setOpenMobileNav((prev) => !prev)}
						>
							<svg
								className="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width={20}
								height={20}
								viewBox="0 0 20 20"
							>
								<title>menu</title>
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
							</svg>
						</label>
					</div>

					<div
						className={`${
							openMobileNav ? "block" : "hidden"
						} lg:flex lg:items-center lg:w-auto w-full absolute left-0 mx-[-10px] z-20`}
						id="menu"
					>
						<nav>
							<ul className="z-20 lg:flex text-center font-bold items-center justify-between text-base bg-[#fff] p-4 lg:pt-0 w-screen">
								<li>
									<Link
										className={`py-3 px-0 block hover:text-primary ${
											pathName === "/" || pathName === "/jp"
												? "text-primary"
												: "text-title"
										}`}
										href="/"
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										className={`py-3 px-0 block hover:text-primary ${
											pathName === "/services" || pathName === "/jp/services"
												? "text-primary"
												: "text-title"
										}`}
										href="/services"
									>
										Services
									</Link>
								</li>
								<li>
									<Link
										className={`py-3 px-0 block hover:text-primary ${
											pathName === "/casestudy" || pathName === "/jp/casestudy"
												? "text-primary"
												: "text-title"
										}`}
										href="/casestudy"
									>
										Casestudy
									</Link>
								</li>
								<li>
									<Link
										className={`py-3 px-0 block hover:text-primary ${
											pathName === "/recruitment" ||
											pathName === "/jp/recruitment"
												? "text-primary"
												: "text-title"
										}`}
										href="/recruitment"
									>
										Recruitment
									</Link>
								</li>
								<li>
									<Link
										className={`py-3 px-0 block hover:text-primary ${
											pathName === "/news" || pathName === "/jp/news"
												? "text-primary"
												: "text-title"
										}`}
										href="/news"
									>
										News
									</Link>
								</li>
								<li>
									<Link
										className={`py-3 px-0 block hover:text-primary ${
											pathName === "/contact" || pathName === "/jp/contact"
												? "text-primary"
												: "text-title"
										}`}
										href="/contact"
									>
										Contact
									</Link>
								</li>
								<li>
									<button
										onClick={() => setOpen((o) => !o)}
										className="bg-[#f67b25] p-2 rounded-md text-[9px] text-[#fff] font-bold my-3"
									>
										{t("Download")}
									</button>
								</li>
								<li>
									<Link
										href="https://www.facebook.com/zens.company/"
										className="lg:p-4 py-3 px-0 lg:mb-0 mx-auto flex justify-center"
									>
										<Image src={"/fb.png"} width={28} height={28} alt="img" />
									</Link>
								</li>
								<li
									className="text-center lg:p-4 py-3 px-0 block"
									onClick={() => handleLanguageChange(otherLocale)}
								>
									<span className="whitespace-nowrap hover:text-primary">
										{selectedLanguage}
									</span>
								</li>
							</ul>
						</nav>
					</div>
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
