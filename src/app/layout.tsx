import type {Metadata} from "next";
import "reset-css";
import "./globals.scss";
import {roboto} from "@/assets/fonts/roboto";
import {Navigation} from "@/components/Navigation";

export const metadata: Metadata = {
	title: "Matthew Widdicombe",
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
			</body>
		</html>
	);
}
