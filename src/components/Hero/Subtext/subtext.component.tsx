import {ReactNode} from "react";
import styles from "./subtext.module.scss";

export interface SubtextProps {
	children: ReactNode;
}

export const Subtext = ({children}: SubtextProps) => (
	<h1 className={styles.subtext}>{children}</h1>
);
