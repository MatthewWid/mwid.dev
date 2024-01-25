import Image from "next/image";
import {clsx} from "clsx";
import {montserrat} from "@/assets/fonts/montserrat";
import repoLinkIcon from "@/assets/images/icons/code.svg";
import demoLinkIcon from "@/assets/images/icons/globe.svg";
import docsLinkIcon from "@/assets/images/icons/document.svg";
import {techIdToInfo} from "@/config/tech.constants";
import styles from "./project-item.module.scss";
import {Project} from "../../types/project.type";

export interface ProjectProps extends Project {}

export const ProjectItem = ({
	title,
	description,
	color,
	preview,
	techIds,
	repo,
	demo,
	docs,
}: ProjectProps) => (
	<div className={styles.project}>
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
					alt={`${title} preview screenshot`}
				/>
			</div>
		</div>
		<div className={styles.info}>
			<a href={repo} target="_blank">
				<h2 className={clsx(montserrat.className, styles.title)}>
					{title}
					<div
						aria-hidden
						className={styles.accent}
						style={{backgroundColor: color}}
					/>
				</h2>
			</a>
			<p className={styles.description}>{description}</p>
			<ul className={styles["tech-list"]}>
				{techIds.map((id) => (
					<li key={id} className={styles["tech-item"]}>
						<a href={techIdToInfo[id].url} target="_blank">
							{techIdToInfo[id].name}
						</a>
					</li>
				))}
			</ul>
			<div className={styles["link-list"]}>
				{repo && (
					<a
						href={repo}
						target="_blank"
						className={styles["link-item"]}
					>
						<Image
							src={repoLinkIcon}
							alt="Source code icon"
							className={styles["link-icon"]}
						/>
						<span className={styles["link-text"]}>source code</span>
					</a>
				)}
				{demo && (
					<a
						href={demo}
						target="_blank"
						className={styles["link-item"]}
					>
						<Image
							src={demoLinkIcon}
							alt="Demo link icon"
							className={styles["link-icon"]}
						/>
						<span className={styles["link-text"]}>live demo</span>
					</a>
				)}
				{docs && (
					<a
						href={docs}
						target="_blank"
						className={styles["link-item"]}
					>
						<Image
							src={docsLinkIcon}
							alt="Documentation link icon"
							className={styles["link-icon"]}
						/>
						<span className={styles["link-text"]}>
							documentation
						</span>
					</a>
				)}
			</div>
		</div>
	</div>
);
