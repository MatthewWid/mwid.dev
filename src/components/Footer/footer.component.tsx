import styles from "./footer.module.scss";

export const Footer = () => (
	<section className={styles.footer}>
		<ul className={styles.list}>
			<li>
				<a href="/attribution" className={styles["list-item-link"]}>
					<span className={styles["list-item-text"]}>
						attribution
					</span>
				</a>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/matthew-widdicombe"
					target="blank"
					className={styles["list-item-link"]}
				>
					<span className={styles["list-item-text"]}>linkedin</span>
				</a>
			</li>
			<li>
				<a
					href="https://github.com/MatthewWid"
					target="blank"
					className={styles["list-item-link"]}
				>
					<span className={styles["list-item-text"]}>github</span>
				</a>
			</li>
			<li>
				<a
					href="mailto:matthew.widdi@gmail.com"
					target="blank"
					className={styles["list-item-link"]}
				>
					<span className={styles["list-item-text"]}>email</span>
				</a>
			</li>
		</ul>
	</section>
);
