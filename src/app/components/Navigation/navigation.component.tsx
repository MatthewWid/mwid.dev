import Image from "next/image";
import {clsx} from "clsx";
import {montserrat} from "@/assets/fonts/montserrat";
import hamburger from "@/assets/images/icons/hamburger.svg";
import styles from "./navigation.module.scss";
import {NavLink} from "./NavLink";

export const Navigation = () => (
	<header className={styles.navigation}>
		<h1 className={clsx(montserrat.className, styles.logo)}>
			<a href="/#" data-scroll="hero">
				M<span className={styles.dot}>&bull;</span>W
			</a>
		</h1>
		<button className={styles["menu-button"]}>
			<Image src={hamburger} alt="Menu icon" width={32} height={32} />
		</button>
		<nav aria-label="Main menu">
			<ul className={styles["nav-list"]}>
				<NavLink to="/#about-me">about me</NavLink>
				<NavLink to="/#projects">projects</NavLink>
				<NavLink to="/#contact">contact</NavLink>
			</ul>
		</nav>
	</header>
);
