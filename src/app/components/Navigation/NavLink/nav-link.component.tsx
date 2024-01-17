import {ReactNode} from "react";
import {clsx} from "clsx";
import {sourceSans} from "@/assets/fonts/source-sans";
import styles from "./nav-link.module.scss";

export interface NavLinkProps {
	to: string;
	children: ReactNode;
}

export const NavLink = ({to, children}: NavLinkProps) => (
	<li className={clsx(sourceSans.className, styles["list-item"])}>
		<a href={to} className={styles["list-item-link"]}>
			{children}
		</a>
	</li>
);
