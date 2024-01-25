import styles from "./about.module.scss";
import {WhoIAm} from "../WhoIAm";
import {TechList} from "../TechList";

export const About = () => (
	<>
		<section className={styles.section} id="about-me">
			<div className={styles.content}>
				<WhoIAm />
			</div>
		</section>
		<section className={styles.section} id="tech">
			<div className={styles.content}>
				<TechList />
			</div>
		</section>
	</>
);
