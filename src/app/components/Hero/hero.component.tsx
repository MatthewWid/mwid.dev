import Image from "next/image";
import {clsx} from "clsx";
import {montserrat} from "@/assets/fonts/montserrat";
import linkedin from "@/assets/images/icons/linkedin.svg";
import github from "@/assets/images/icons/github.svg";
import codepen from "@/assets/images/icons/codepen.svg";
import email from "@/assets/images/icons/email.svg";
import styles from "./hero.module.scss";

export const Hero = () => (
	<section className={clsx(styles.hero, montserrat.className)}>
		<div className={styles.content}>
			<p className={styles.subtext}>Hi, I&apos;m</p>
			<h1 className={styles.fullname}>Matthew Widdicombe</h1>
			<p className={styles.subtext}>Software engineer</p>
			<div className={styles.links}>
				<a
					href="https://www.linkedin.com/in/matthew-widdicombe"
					target="_blank"
					title="LinkedIn"
				>
					<Image src={linkedin} alt="LinkedIn logo" />
				</a>
				<a
					href="https://github.com/MatthewWid"
					target="_blank"
					title="GitHub"
				>
					<Image src={github} alt="GitHub logo" />
				</a>
				<a
					href="https://codepen.io/MatthewWid"
					target="_blank"
					title="CodePen"
				>
					<Image src={codepen} alt="CodePen logo" />
				</a>

				<div className={styles.email}>
					<a href="mailto:matthew.widdi@gmail.com" title="Email me">
						<Image src={email} alt="Email icon" />
					</a>
					<p>matthew.widdi@gmail.com</p>
				</div>
			</div>
		</div>
		<div
			className={styles["scroll-indicator"]}
			role="button"
			aria-label="Scroll down"
		/>
	</section>
);
