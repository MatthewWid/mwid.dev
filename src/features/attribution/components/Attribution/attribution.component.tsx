import {Hero} from "@/components/Hero";
import styles from "./attribution.module.scss";

export const Attribution = () => (
	<Hero>
		<Hero.Title>Attribution</Hero.Title>
		<Hero.Subtext>
			<ul className={styles.list}>
				<li>
					<a
						href="https://www.flaticon.com/free-icons/kick-off"
						title="kick off icons"
					>
						Kick off icons created by shin_icons - Flaticon
					</a>
				</li>
			</ul>
		</Hero.Subtext>
	</Hero>
);
