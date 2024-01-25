import {ReactElement, ReactNode} from "react";
import {clsx} from "clsx";
import {montserrat} from "@/assets/fonts/montserrat";
import {ScrollIndicatorProps} from "@/components/ScrollIndicator";
import styles from "./hero.module.scss";

export interface HeroProps {
	children: ReactNode;
	scrollIndicator?: ReactElement<ScrollIndicatorProps>;
}

export const Hero = ({children, scrollIndicator}: HeroProps) => (
	<section className={clsx(styles.hero, montserrat.className)}>
		<div className={styles.content}>{children}</div>
		{scrollIndicator}
	</section>
);
