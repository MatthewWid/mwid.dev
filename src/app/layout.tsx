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

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<Navigation />
				<main>{children}</main>
				<Contact />
				<Footer />
				<Script
					src="https://umami.mwid.dev/script.js"
					data-website-id="eeef5c32-fb0a-43b3-879a-e40816df841c"
				/>
			</body>
		</html>
	);
}
