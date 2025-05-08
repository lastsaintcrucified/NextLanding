import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Md.Towhidul Islam Bhy",
	description: "Towhid resume",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			className='relative scroll-smooth'
		>
			<body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
				{children}
			</body>
		</html>
	);
}
