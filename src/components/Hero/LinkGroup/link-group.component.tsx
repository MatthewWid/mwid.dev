import {ReactNode} from "react";
import styles from "./link-group.module.scss";

export interface LinkGroupProps {
	children: ReactNode;
}

export const LinkGroup = ({children}: LinkGroupProps) => (
	<div className={styles.links}>{children}</div>
);
