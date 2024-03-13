import {ReactElement} from "react";
import styles from "./link-popout.module.scss";
import {LinkIconProps} from "../LinkIcon";

export interface LinkPopoutProps {
	text: string;
	children: ReactElement<LinkIconProps>;
}

export const LinkPopout = ({text, children}: LinkPopoutProps) => (
	<div className={styles.email}>
		{children}
		<p>{text}</p>
	</div>
);
