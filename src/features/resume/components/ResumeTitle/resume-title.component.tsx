"use client";

import {useState} from "react";
import Image from "next/image";
import {clsx} from "clsx";
import rocketShip from "@/assets/images/icons/rocket-ship.svg";
import rocketPlume from "@/assets/images/icons/rocket-plume.svg";
import {Hero} from "@/components/Hero";
import {ScrollIndicator} from "@/components/ScrollIndicator";
import styles from "./resume-title.module.scss";

export const ResumeTitle = () => {
	const [isLaunched, setIsLaunched] = useState(false);

	return (
		<Hero
			scrollIndicator={
				<ScrollIndicator to="/resume#jobs"></ScrollIndicator>
			}
		>
			<Hero.Title>Resum&eacute;</Hero.Title>
			<Hero.Subtext>
				From drone control panels and big-data visualisation tools to
				supply-chain dashboards and file management systems,
				<br />I have professional experience working with a wide range
				of projects across a multitude of diverse teams and organisations.
			</Hero.Subtext>
			<div
				className={clsx(styles.rocket, isLaunched && styles.launched)}
				onClick={() => setIsLaunched(true)}
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
