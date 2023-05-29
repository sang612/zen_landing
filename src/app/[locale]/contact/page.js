"use client"

import { useTranslations } from "next-intl";
import "../../../pages/styles/globals.css";
import { useState } from "react";
import { sendContactForm } from "@/lib/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactPage() {
	const t = useTranslations("Contact");
	const [inputs, setInputs] = useState({});
	const notify = () => toast.success(`${t("Success")}`, { autoClose: 2000 });

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = document.getElementById("my_form");
		try {
			await sendContactForm(inputs);
			form.reset();
			notify();
		} catch (error) {
			console.log(error);
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
							{t("Sent")}
						</button>
					</div>
					<ToastContainer />
				</form>
			</div>
		</div>
	);
}
