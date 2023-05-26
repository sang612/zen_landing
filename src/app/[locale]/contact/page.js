"use client"

import { useTranslations } from "next-intl";
import "../../../pages/styles/globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState, useCallback } from "react";

export default function ContactPage() {
	const t = useTranslations("Contact");
	const [loading, setLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const notify = useCallback(() => {
		toast.success(`${t("Success")}`, { autoClose: 2000 });
	}, [t]);

	const notifyError = useCallback(() => {
		toast.error(`${t("Error")}`, { autoClose: 2000 });
	}, [t]);

	useEffect(() => {
		if (loading && !isError) notify();
		if (isError) notifyError();
	}, [loading, isError, notify, notifyError]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = document.getElementById("my_form");
		const formData = new FormData(form);
		try {
			setLoading(true);
			const response = await fetch(
				"https://script.google.com/macros/s/AKfycbzWL1PpZ0E_aFHxOw67wyfQt9acFtDX0nqZ7t9Js-TTKJFDFNzjxAPZcW69lX4N_jpY/exec",
				{
					method: "POST",
					body: formData,
				}
			);
			await response.json();
		} catch (error) {
			setIsError(true);
		} finally {
			setLoading(false);
			setIsError(false);
		}
		if (!isError) form.reset();
	};

	return (
		<div className="relative xl:max-w-[1440px]">
			<div className="mx-auto max-w-[914px] px-[28px] py-[40px] rounded-[16px] shadow-[0px_20px_20px_#0000000d] bg-[#fff]">
				<form id="my_form" onSubmit={handleSubmit}>
					<div className="flex items-center justify-center">
						<input
							type="text"
							name="name"
							placeholder={t("Name")}
							className="placeholder:text-sub placeholder:text-[15px] text-[15px] text-sub outline-none w-full px-[12px] py-[11px] h-[44px] border-[1.5px] border-solid border-[#C4C4C4] rounded-[8px]"
							required
						/>
						<input
							type="email"
							name="email"
							placeholder={t("Email")}
							className="ml-[20px] placeholder:text-sub placeholder:text-[15px] text-[15px] text-sub outline-none w-full px-[12px] py-[11px] h-[44px] border-[1.5px] border-solid border-[#C4C4C4] rounded-[8px]"
							required
						/>
					</div>
					<input
						type="text"
						name="subject"
						placeholder={t("Subject")}
						className="my-[20px] placeholder:text-sub placeholder:text-[15px] text-[15px] text-sub outline-none w-full px-[12px] py-[11px] h-[44px] border-[1.5px] border-solid border-[#C4C4C4] rounded-[8px]"
						required
					/>
					<textarea
						type="text"
						name="message"
						placeholder={t("Message")}
						className="placeholder:text-sub placeholder:text-[15px] text-[15px] text-sub outline-none w-full px-[12px] py-[11px] h-[148px] border-[1.5px] border-solid border-[#C4C4C4] rounded-[8px]"
						required
					/>
					<div className="mt-[40px] text-center">
						<button
							type="submit"
							className="w-[200px] h-[48px] rounded-[8px] px-[16px- py-[12px] hover:opacity-[0.6] hover:text-[#fff] bg-primary text-[#fff] text-[17px] leading-[24px] font-[600] tracking-[-0.005em]"
						>
							{t("Sent")}
						</button>
					</div>
				</form>
				<ToastContainer />
			</div>
		</div>
	);
}