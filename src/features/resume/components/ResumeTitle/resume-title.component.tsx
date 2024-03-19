"use client";

import {useState} from "react";
import Image from "next/image";
import {clsx} from "clsx";
import rocketShip from "@/assets/images/icons/rocket-ship.svg";
import rocketPlume from "@/assets/images/icons/rocket-plume.svg";
import {Hero} from "@/components/Hero";
import {ScrollIndicator} from "@/components/ScrollIndicator";
import styles from "./resume-title.module.scss";

const NEXT_ELEMENT = "#work";

export const ResumeTitle = () => {
	const [isLaunched, setIsLaunched] = useState(false);

	const rocketOnClick = () => {
		setIsLaunched(true);

		const targetElement = document.querySelector(NEXT_ELEMENT);

		if (targetElement) {
			setTimeout(() => {
				targetElement.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}, 1000);
		}

		history.replaceState(null, "", NEXT_ELEMENT);
	};

	return (
		<Hero
			scrollIndicator={
				<ScrollIndicator
					to={`/resume${NEXT_ELEMENT}`}
					scrollPosition="start"
				/>
			}
		>
			<Hero.Title>Resum&eacute;</Hero.Title>
			<Hero.Subtext>
				From drone control panels and big-data visualisation tools to
				supply-chain dashboards and file management systems,
				<br />I have professional experience working with a wide range
				of projects across a multitude of diverse teams and
				organisations.
			</Hero.Subtext>
			<div
				className={clsx(styles.rocket, isLaunched && styles.launched)}
				onClick={rocketOnClick}
			>
				<Image
					src={rocketPlume}
					alt="Rocket plume"
					width={64}
					height={64}
					className={styles.plume}
				/>
				<Image
					src={rocketShip}
					alt="Rocket ship"
					width={64}
					height={64}
					className={styles.ship}
				/>
			</div>
		</Hero>
	);
};
