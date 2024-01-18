"use client";

import {onClickSmoothScroll} from "@/utils/on-click-smooth-scroll";
import styles from "./scroll-indicator.module.scss";

export const ScrollIndicator = () => (
	<a href="/#about-me" onClick={onClickSmoothScroll}>
		<div
			className={styles["scroll-indicator"]}
			role="button"
			aria-label="Scroll down"
		/>
	</a>
);
