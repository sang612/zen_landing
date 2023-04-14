import { BigHeader } from "@/components/BigHeader/BigHeader";
import { Footer } from "@/components/Footer";
import Layout from "@/components/Layout";
import { Navbar } from "@/components/Navbar";

export default function RootLayout({ children }) {
	return (
		<html>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				<BigHeader />
				<div className="relative xl:max-w-[1440px] mx-auto">
					<Navbar />
					{children}
					<Layout />
				</div>
				<Footer />
			</body>
		</html>
	);
}
