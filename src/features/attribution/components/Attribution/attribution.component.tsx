import {Hero} from "@/components/Hero";
import styles from "./attribution.module.scss";

export const Attribution = () => (
	<Hero>
		<Hero.Title>Attribution</Hero.Title>
		<ul className={styles.list}>
			<li>
				<a
					href="https://www.flaticon.com/free-icons/kick-off"
					title="kick off icons"
					target="_blank"
				>
					Kick off icons created by shin_icons - Flaticon
				</a>
			</li>
		</ul>
	</Hero>
);
