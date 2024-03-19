import websiteLinkIcon from "@/assets/images/icons/globe.svg";
import linkedinLinkIcon from "@/assets/images/icons/linkedin.svg";
import {InfoBlockList} from "@/components/InfoBlockList";
import {InfoBlock, InfoBlockLink} from "@/components/InfoBlock";
import {jobList} from "../../config/jobs.constants";

export const JobList = () => (
	<InfoBlockList id="work">
		{jobList.map(({id, preview, website, linkedin, ...rest}) => {
			const links: InfoBlockLink[] = [];

			if (website) {
				links.push({
					url: website,
					text: "Website",
					icon: websiteLinkIcon,
				});
			}

			if (linkedin) {
				links.push({
					url: linkedin,
					text: "LinkedIn",
					icon: linkedinLinkIcon,
				});
			}

			return (
				<InfoBlock
					key={id}
					preview={{image: preview, render: "pixelated"}}
					links={links}
					{...rest}
				/>
			);
		})}
	</InfoBlockList>
);
