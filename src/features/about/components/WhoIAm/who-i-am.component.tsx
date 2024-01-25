import Image from "next/image";
import {clsx} from "clsx";
import {montserrat} from "@/assets/fonts/montserrat";
import mapmarker from "@/assets/images/icons/mapmarker.svg";
import styles from "./who-i-am.module.scss";

export const WhoIAm = () => (
	<>
		<h2 className={montserrat.className}>Who I am</h2>
		<p>Hi there, I&apos;m Matt (he/him).</p>
		<p>
			I&apos;m a{" "}
			<span className={clsx(styles.underline, styles["underline-pink"])}>
				software engineer
			</span>{" "}
			with an interest in the web.
		</p>
		<p>
			I create beautiful, functional and worthwhile{" "}
			<span className={clsx(styles.underline, styles["underline-blue"])}>
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
	</>
);
