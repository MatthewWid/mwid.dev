import Image from "next/image";
import styles from "./tech-item.module.scss";
import {techIdToInfo} from "@/config/tech.constants";

export interface TechItemProps {
	id: string;
}

export const TechItem = ({id}: TechItemProps) => {
	const {name, url, logo} = techIdToInfo[id];

	return (
		<a href={url} title={name} target="_blank" className={styles.link}>
			<Image src={logo} alt={`${name} logo`} className={styles.image} />
		</a>
	);
};
