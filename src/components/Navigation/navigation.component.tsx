"use client";

import {useState} from "react";
import Image from "next/image";
import {clsx} from "clsx";
import {onClickSmoothScroll} from "@/utils/on-click-smooth-scroll";
import {montserrat} from "@/assets/fonts/montserrat";
import hamburger from "@/assets/images/icons/hamburger.svg";
import styles from "./navigation.module.scss";
import {NavLink} from "./NavLink";

export const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className={styles.navigation}>
			<a
				href="/#"
				onClick={onClickSmoothScroll}
				data-scroll-position="start"
				className={clsx(montserrat.className, styles.logo)}
			>
				M<span className={styles.dot}>&bull;</span>W
			</a>
			<nav className={clsx(styles.menu, isMenuOpen && styles.expanded)}>
				<button
					onClick={() =>
						setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen)
					}
					aria-label="Toggle show navigation menu items"
					className={styles["menu-button"]}
				>
					<Image
						src={hamburger}
						alt="Menu icon"
						width={32}
						height={32}
					/>
				</button>
				<ul
					onClick={() => setIsMenuOpen(false)}
					className={styles["menu-list"]}
				>
					<NavLink to="/#about-me" data-scroll-position="center">
						about me
					</NavLink>
					<NavLink to="/#projects" data-scroll-position="start">
						projects
					</NavLink>
					<NavLink to="/resume">resum&eacute;</NavLink>
					<NavLink to="/#contact" data-scroll-position="center">
						contact
					</NavLink>
				</ul>
			</nav>
		</header>
	);
};
