import repoLinkIcon from "@/assets/images/icons/code.svg";
import demoLinkIcon from "@/assets/images/icons/globe.svg";
import docsLinkIcon from "@/assets/images/icons/document.svg";
import {InfoBlockList} from "@/components/InfoBlockList";
import {InfoBlock, InfoBlockLink} from "@/components/InfoBlock";
import {projectList} from "../../config/projects.constants";

export const ProjectList = () => (
	<InfoBlockList id="projects">
		{projectList.map(({id, repo, demo, docs, ...rest}) => {
			const links: InfoBlockLink[] = [
				{
					url: repo,
					text: "source code",
					icon: repoLinkIcon,
				},
			];

			if (demo) {
				links.push({
					url: demo,
					text: "demo",
					icon: demoLinkIcon,
				});
			}

			if (docs) {
				links.push({
					url: docs,
					text: "documentation",
					icon: docsLinkIcon,
				});
			}

			return <InfoBlock key={id} links={links} {...rest} />;
		})}
	</InfoBlockList>
);
