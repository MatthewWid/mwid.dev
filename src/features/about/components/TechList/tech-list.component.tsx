import {montserrat} from "@/assets/fonts/montserrat";
import {TechItem} from "./TechItem";
import styles from "./tech-list.module.scss";
import {tech} from "./tech-list.constants";

export const TechList = () => (
	<>
		<h2 className={montserrat.className}>My tech.</h2>
		<div className={styles["tech-list"]}>
			{tech.map((id) => (
				<TechItem key={id} id={id} />
			))}
		</div>
		<p className={styles["btw"]}>
			... and I use{" "}
			<a href="https://youtu.be/9n1dtmzqnCU" target="_blank">
				vim
			</a>{" "}
			btw
		</p>
	</>
);
