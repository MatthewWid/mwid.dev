import {HTMLAttributeAnchorTarget} from "react";
import Image from "next/image";

export interface LinkIconProps {
	to: string;
	title: string;
	target?: HTMLAttributeAnchorTarget;
	imageSrc: string;
	imageAlt?: string;
}

export const LinkIcon = ({
	to,
	title,
	target = "_blank",
	imageSrc,
	imageAlt = `${title} icon`,
}: LinkIconProps) => (
	<a href={to} target={target} title={title}>
		<Image src={imageSrc} alt={imageAlt} />
	</a>
);
