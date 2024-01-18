import Image from "next/image";
import styles from "./tech-item.module.scss";
import {keyToImage} from "./tech-item.constants";

export interface TechItemProps {
	name: string;
	imageKey: keyof typeof keyToImage;
	url?: string;
}

export const TechItem = ({name, imageKey, url}: TechItemProps) => (
	<a href={url} title={name} target="_blank" className={styles.link}>
		<Image
			src={keyToImage[imageKey]}
			alt={`${name} logo`}
			className={styles.image}
		/>
	</a>
);
