import {projectList} from "../../config/projects.constants";
import styles from "./project-list.module.scss";
import {ProjectItem} from "./ProjectItem";

export const ProjectList = () => (
	<section id="projects" className={styles.projects}>
		{projectList.map((props) => (
			<ProjectItem key={props.title} {...props} />
		))}
	</section>
);
