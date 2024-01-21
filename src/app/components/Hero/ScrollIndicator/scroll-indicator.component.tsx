"use client";

import {onClickSmoothScroll} from "@/utils/on-click-smooth-scroll";
import styles from "./scroll-indicator.module.scss";

export const ScrollIndicator = () => (
	<a
		href="/#about-me"
		onClick={onClickSmoothScroll}
		data-scroll-position="center"
		role="button"
		aria-label="Scroll down"
	>
		<div className={styles["scroll-indicator"]} />
	</a>
);
