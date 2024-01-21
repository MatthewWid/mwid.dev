import {Email} from "./Email";
import styles from "./contact.module.scss";

export const Contact = () => (
	<section id="contact" className={styles.contact}>
		<div className={styles.content}>
			<h2 className={styles.heading}>Want to chat?</h2>
			<p className={styles.subtext}>Shoot me an email and say hi! 👋</p>
			<Email />
		</div>
	</section>
);
