import Image from "next/image";
import {clsx} from "clsx";
import {montserrat} from "@/assets/fonts/montserrat";
import mapmarker from "@/assets/images/icons/mapmarker.svg";
import styles from "./about.module.scss";
import {techList} from "./about.constants";
import {TechItem} from "./TechItem";

export const About = () => (
	<>
		<section className={styles.section} id="about-me">
			<div className={styles.content}>
				<h1 className={montserrat.className}>Who I am</h1>
				<p>Hi there, I&apos;m Matt (he/him).</p>
				<p>
					I&apos;m a{" "}
					<span
						className={clsx(
							styles.underline,
							styles["underline-pink"]
						)}
					>
						software engineer
					</span>{" "}
					with an interest in the web.
				</p>
				<p>
					I create beautiful, functional and worthwhile{" "}
					<span
						className={clsx(
							styles.underline,
							styles["underline-blue"]
						)}
					>
						applications and websites
					</span>
					.
				</p>
				<p>
					Based in{" "}
					<Image
						src={mapmarker}
						alt="Map marker icon"
						className={styles.mapmarker}
					/>{" "}
					Sydney, Australia.
				</p>
			</div>
		</section>
		<section className={styles.section} id="my-tech">
			<div className={styles.content}>
				<h1 className={montserrat.className}>My tech.</h1>
				<div className={styles["tech-list"]}>
					{techList.map((id) => (
						<TechItem key={id} id={id} />
					))}
				</div>
			</div>
		</section>
	</>
);
