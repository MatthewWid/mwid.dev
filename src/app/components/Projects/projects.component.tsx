import {projectList} from "./projects.constants";
import styles from "./projects.module.scss";
import {Project} from "./Project";

export const Projects = () => (
	<section id="projects" className={styles.projects}>
		{projectList.map((props) => (
			<Project key={props.title} {...props} />
		))}
	</section>
);
