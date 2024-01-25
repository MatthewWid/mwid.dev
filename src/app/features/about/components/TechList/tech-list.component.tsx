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
	</>
);
