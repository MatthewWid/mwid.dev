import {ReactNode} from "react";
import styles from "./title.module.scss";

export interface TitleProps {
	children: ReactNode;
}

export const Title = ({children}: TitleProps) => (
	<h1 className={styles.title}>{children}</h1>
);
