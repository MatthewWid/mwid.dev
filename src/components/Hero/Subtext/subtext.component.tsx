import {ReactNode} from "react";
import styles from "./subtext.module.scss";

export interface SubtextProps {
	children: ReactNode;
}

export const Subtext = ({children}: SubtextProps) => (
	<p className={styles.subtext}>{children}</p>
);
