import linkedin from "@/assets/images/icons/linkedin.svg";
import github from "@/assets/images/icons/github.svg";
import codepen from "@/assets/images/icons/codepen.svg";
import email from "@/assets/images/icons/email.svg";
import {Hero} from "@/components/Hero";
import {ScrollIndicator} from "@/components/ScrollIndicator";

export const Title = () => (
	<Hero scrollIndicator={<ScrollIndicator to="/#about-me" />}>
		<Hero.Subtext>Hi, I&apos;m</Hero.Subtext>
		<Hero.Title>Matthew Widdicombe</Hero.Title>
		<Hero.Subtext>Software engineer</Hero.Subtext>
		<Hero.LinkGroup>
			<Hero.LinkIcon
				to="https://www.linkedin.com/in/matthew-widdicombe"
				title="LinkedIn"
				imageSrc={linkedin}
			/>
			<Hero.LinkIcon
				to="https://github.com/MatthewWid"
				title="GitHub"
				imageSrc={github}
			/>
			<Hero.LinkIcon
				to="https://codepen.io/MatthewWid"
				title="CodePen"
				imageSrc={codepen}
			/>
			<Hero.LinkPopout text="matthew.widdi@gmail.com">
				<Hero.LinkIcon
					to="mailto:matthew.widdi@gmail.com"
					title="Email me"
					target="_self"
					imageSrc={email}
				/>
			</Hero.LinkPopout>
		</Hero.LinkGroup>
	</Hero>
);
