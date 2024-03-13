import {ReactElement, ReactNode} from "react";
import {clsx} from "clsx";
import {montserrat} from "@/assets/fonts/montserrat";
import {ScrollIndicatorProps} from "@/components/ScrollIndicator";
import {Title} from "./Title";
import {Subtext} from "./Subtext";
import {LinkGroup} from "./LinkGroup";
import {LinkIcon} from "./LinkIcon";
import {LinkPopout} from "./LinkPopout";
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

Hero.Title = Title;
Hero.Subtext = Subtext;
Hero.LinkGroup = LinkGroup;
Hero.LinkIcon = LinkIcon;
Hero.LinkPopout = LinkPopout;
