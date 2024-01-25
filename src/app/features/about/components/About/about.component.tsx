import styles from "./about.module.scss";
import {WhoAmI} from "../WhoAmI";
import {TechList} from "../TechList";

export const About = () => (
	<>
		<section className={styles.section} id="about-me">
			<div className={styles.content}>
				<WhoAmI />
			</div>
		</section>
		<section className={styles.section} id="tech">
			<div className={styles.content}>
				<TechList />
			</div>
		</section>
	</>
);
