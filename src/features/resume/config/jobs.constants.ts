import ortto from "@/assets/images/previews/ortto.svg";
import bitscore from "@/assets/images/previews/bits-core.png";
import aanda from "@/assets/images/previews/aanda-swim-school.png";
import eiaustralia from "@/assets/images/previews/eiaustralia.png";
import afm from "@/assets/images/previews/afm.jpg";
import {Job} from "../types/job.type";

export const jobList: Job[] = [
	{
		id: "ortto",
		title: "Front-end Engineer",
		subtitle: "Full-time — Jun. 2022 - Feb. 2023",
		description: [
			"At Ortto, I worked closely with a multitude of designers, developers and product owners to create and maintain new and existing features across the main SaaS-based application with a focus on the front-end web user interface and experience.",
			"My role involved the development and maintenance of both greenfield and legacy products, features and plugins, as well as addressing customer requests and support issues, contributing to technical feasibility reports, writing technical documentation and presenting internal and external product demonstrations.",
			"I have engineered, implemented, documented and maintained projects such as report dashboards, email creation workflows, user-management panels, big-data visualisations, data filtration systems and more.",
		],
		color: "#DD644A",
		preview: ortto,
		techIds: [
			"ts",
			"react",
			"redux",
			"storybook",
			"webpack",
			"git",
			"trello",
		],
		website: "https://ortto.com/",
		linkedin: "https://www.linkedin.com/company/ortto/",
	},
	{
		id: "bits-core",
		title: "Software Engineer",
		subtitle: "Full-time — Nov. 2019 - Jun. 2022",
		description: [
			"At BITSCore, I created modern and scalable web applications and APIs in a team-based environment using the latest web technologies and present-day best practices to engineer new and innovative products of high quality in a timely manner.",
			"I contributed to projects related to water and air drone technology, rocket and satellite sensor devices, distributed blockchain-based file storage databases, product labelling services, global supply-chain tracking systems, database management utilities and more.",
		],
		color: "#36749D",
		preview: bitscore,
		techIds: [
			"ts",
			"react",
			"redux",
			"node",
			"express",
			"nest",
			"storybook",
			"cypress",
			"webpack",
			"git",
			"docker",
			"ecs",
			"ec2",
			"s3",
			"cdk",
			"bamboo",
			"jira",
		],
		website:
			"https://web.archive.org/web/20220810194610/https://www.bits-core.com/#",
	},
	{
		id: "aanda",
		title: "Web Developer",
		subtitle: "Contract — Sep. 2021 - Oct. 2021",
		description:
			"I worked with A&A Swim School to develop their new online presence in the form of a brand new company website to show off to current and potential customers. During the project I worked with the client to design, develop and deploy their new website with a beautiful look and easy-to-use intuitive functionality.",
		color: "#35B8BE",
		preview: aanda,
		techIds: ["html", "css", "javascript", "webflow"],
	},
	{
		id: "eiaustralia",
		title: "Web Developer",
		subtitle: "Contract — Jul. 2020 - Oct. 2020",
		description: [
			"I worked with EI Australia as the sole developer on the project to recreate their public-facing company website using technologies such as Webflow, HTML, CSS and JavaScript. In this role I liased with core stakeholders such as business owners, content managers, user interface and experience designers and more to plan, develop, implement and publish a new and improved website for the business at large.",
			"Upon completion, the remade website yielded load times 3.6x faster than before and showed demonstrably better SEO and search ranking results, surpassing the all time monthly visitor record and user retention rates of the old site within just two months of its publishing.",
		],
		color: "#309B40",
		preview: eiaustralia,
		techIds: ["html", "css", "javascript", "webflow"],
		website: "https://www.eiaustralia.com.au/",
		linkedin: "https://www.linkedin.com/company/ei-australia/",
	},
	{
		id: "afm",
		title: "Lab Assistant",
		subtitle: "Part-time — Jan. 2018 - Feb. 2018",
		description: [
			"At AFM, I developed and maintained a database management system to track, edit and view laboratory samples, as well as aiding in general cleaning and inventory management responsibilities in a close-knit team environment.",
			"The role involved self-learning with various technical systems as well as communication and teamwork to continually plan and organise new features. I would often take initiative in making system changes and handling customer deliveries to the laboratory to improve the overall efficiency of daily business tasks.",
		],
		color: "#1467CC",
		preview: afm,
		techIds: ["access", "vba"],
		website: "https://www.australianfoodmicrobiology.com.au/",
		linkedin:
			"https://www.linkedin.com/company/australian-food-microbiology/",
	},
];
