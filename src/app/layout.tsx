import type {Metadata} from "next";
import "reset-css";
import "./globals.scss";
import {roboto} from "./assets/fonts/roboto";
import {Navigation} from "./components/Navigation";

export const metadata: Metadata = {
	title: "Matthew Widdicombe",
	description: "A personal portfolio and digital resume.",
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
