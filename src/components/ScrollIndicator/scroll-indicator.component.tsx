"use client";

import {onClickSmoothScroll} from "@/utils/on-click-smooth-scroll";
import styles from "./scroll-indicator.module.scss";

export interface ScrollIndicatorProps {
	to?: string;
}

export const ScrollIndicator = ({to}: ScrollIndicatorProps) => {
	const content = <div className={styles["scroll-indicator"]} />;

	return to ? (
		<a
			href={to}
			onClick={onClickSmoothScroll}
			data-scroll-position="center"
			role="button"
			aria-label="Scroll down"
		>
			{content}
		</a>
	) : (
		content
	);
};
