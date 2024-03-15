import {HTMLAttributes, ReactElement} from "react";
import {InfoBlockProps} from "../InfoBlock";
import styles from "./info-block-list.module.scss";

export interface InfoBlockListProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactElement<InfoBlockProps>[];
}

export const InfoBlockList = ({children, ...rest}: InfoBlockListProps) => (
	<div className={styles["info-block-list"]} {...rest}>
		{children}
	</div>
);
