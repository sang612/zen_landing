import { FacebookIcon, GlobalIcon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";

export const Header = ({
  showLogo,
  showButtonGroup,
  setOpenMobileNav,
  setOpen,
}) => {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    locale == "en" ? "English" : "日本語"
  );

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
						target="_blank"
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
						<div className="flex items-center justify-center">
							<Link
								href="https://www.facebook.com/zens.company/"
								className="lg:p-4 py-3 px-0 lg:mb-0 mx-auto flex justify-center"
								target="_blank"
							>
								<Image src={"/fb.png"} width={28} height={28} alt="logo" />
							</Link>
							<div className="relative mx-4">
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
									<h4 className="ml-[4px] font-[400] text-[14px] leading-[16px] tracking-[0.5px] text-[#314753]">
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
												<span className="ml-[4px] whitespace-nowrap">
													{t("switchLocale", { locale: otherLocale })}
												</span>
											</div>
										</li>
									</ul>
								)}
							</div>
							<label
								htmlFor="menu-toggle"
								className="pointer-cursor lg:hidden block "
								onClick={() => setOpenMobileNav((prev) => !prev)}
							>
								<FontAwesomeIcon
									icon={faBarsStaggered}
									fontSize={25}
									className="mr-2"
								/>
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
