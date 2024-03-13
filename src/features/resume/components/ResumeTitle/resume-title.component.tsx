import {Hero} from "@/components/Hero";
import {ScrollIndicator} from "@/components/ScrollIndicator";

export const ResumeTitle = () => (
	<Hero
		scrollIndicator={<ScrollIndicator to="/resume#jobs"></ScrollIndicator>}
	>
		<p>
			From drone control panels and big-data visualisation tools,
			<br />
			to file management systems and email creation workflows,
			<br />I have practical experience working with a wide range of
			projects
		</p>
	</Hero>
);
