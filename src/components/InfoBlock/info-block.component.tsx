import Image, {StaticImageData} from "next/image";
import {clsx} from "clsx";
import {montserrat} from "@/assets/fonts/montserrat";
import {techIdToInfo} from "@/config/tech.constants";
import styles from "./info-block.module.scss";

export interface InfoBlockPreview {
	image: StaticImageData;
	fullscreen?: boolean;
	width?: number;
}

export interface InfoBlockLink {
	url: string;
	text: string;
	icon: StaticImageData;
}

export interface InfoBlockProps {
	title: string;
	description: string;
	color: string;
	preview: InfoBlockPreview;
	techIds?: string[];
	links?: InfoBlockLink[];
}

export const InfoBlock = ({
	title,
	description,
	color,
	preview,
	techIds,
	links,
}: InfoBlockProps) => {
	const heading = (
		<h2 className={clsx(montserrat.className, styles.title)}>
			{title}
			<div
				aria-hidden
				className={styles.accent}
				style={{backgroundColor: color}}
			/>
		</h2>
	);

	return (
		<div className={styles["info-block"]}>
			<div
				className={clsx(
					styles.preview,
					preview.fullscreen && styles.fullscreen
				)}
			>
				<div
					className={styles.image}
					style={{
						width: preview.width ? `${preview.width}%` : "100%",
					}}
				>
					<Image
						src={preview.image}
						alt={`${title} preview screenshot or logo`}
						width={0}
						height={0}
					/>
				</div>
			</div>
			<div className={styles.info}>
				{links && links.length > 0 ? (
					<a href={links[0].url} target="_blank">
						{heading}
					</a>
				) : (
					heading
				)}
				<p className={styles.description}>{description}</p>
				{techIds && (
					<ul className={styles["tech-list"]}>
						{techIds.map((id) => (
							<li key={id} className={styles["tech-item"]}>
								<a href={techIdToInfo[id].url} target="_blank">
									{techIdToInfo[id].name}
								</a>
							</li>
						))}
					</ul>
				)}
				{links && links.length > 0 && (
					<div className={styles["link-list"]}>
						{links.map(({url, text, icon}) => (
							<a
								key={url}
								href={url}
								target="_blank"
								className={styles["link-item"]}
							>
								<Image
									src={icon}
									alt={`${text} icon`}
									className={styles["link-icon"]}
								/>
								<span className={styles["link-text"]}>
									{text}
								</span>
							</a>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
