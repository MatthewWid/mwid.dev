import type {Metadata} from "next";
import "reset-css";
import "./globals.scss";
import {roboto} from "@/assets/fonts/roboto";
import {Navigation} from "@/components/Navigation";
import {Contact} from "@/components/Contact";
import {Footer} from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
	title: {
		template: "%s - Matthew Widdicombe",
		default: "Matthew Widdicombe",
	},
	description: "My personal portfolio and digital resume.",
	openGraph: {
		title: "Matthew Widdicombe",
		description: "My personal poortfolio and digital resume",
		url: "https://mwid.dev/",
		images: {
			url: "https://i.ibb.co/Hpw91n8/logo-banner.png",
			width: 1200,
			height: 630,
			alt: "Banner with website logo",
		},
	},
};

const ANALYTICS_SCRIPT_URL = process.env.NEXT_PUBLIC_ANALYTICS_SCRIPT_URL;
const ANALYTICS_WEBSITE_ID = process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID;

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<Navigation />
				<main>{children}</main>
				<Contact />
				<Footer />
				{ANALYTICS_SCRIPT_URL && ANALYTICS_WEBSITE_ID && (
					<Script
						src={ANALYTICS_SCRIPT_URL}
						data-website-id={ANALYTICS_WEBSITE_ID}
					/>
				)}
			</body>
		</html>
	);
}
