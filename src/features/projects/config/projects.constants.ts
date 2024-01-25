import shoutout from "@/assets/images/previews/shoutout.png";
import bonkSkins from "@/assets/images/previews/bonkskins.png";
import redditModBot from "@/assets/images/previews/reddit.png";
import stratRoulette from "@/assets/images/previews/stratroulette.jpg";
import whirl from "@/assets/images/previews/whirl.png";
import {Project} from "../types/project.type";

export const projectList: Project[] = [
	{
		id: "shoutout",
		title: "Shoutout",
		description:
			"News sharing and social media site. Users can create an account, submit posts, upload images, like eachothers' posts and follow eachother.",
		color: "#ef3a95",
		preview: {image: shoutout, width: 85},
		techIds: ["node", "mongodb", "mongoose", "react", "sass", "webpack"],
		repo: "https://github.com/MatthewWid/Shoutout",
		demo: "http://shoutoutsocial.herokuapp.com/",
	},
	{
		id: "bonk-skins",
		title: "Bonk Skins",
		description:
			"Public forum of game avatars that allows users to create their own avatars with a rich interactive user interface and then download and share their creations to the front page.",
		color: "#00ccb8",
		preview: {image: bonkSkins, fullscreen: true},
		techIds: ["php", "mysql", "javascript", "sass"],
		repo: "https://github.com/MatthewWid/bonk-skins.io",
		demo: "http://bonk-skins.herokuapp.com/",
	},
	{
		id: "reddit-mod-bot",
		title: "Reddit Moderation Bot",
		description:
			"Automated bot for tagging, analysing and moderating forum posts, managing user information and storing post information for statistical analysis.",
		color: "#ff4500",
		preview: {image: redditModBot, width: 25},
		techIds: ["node", "mongodb"],
		repo: "https://github.com/MatthewWid/needamod-bot",
		demo: "https://www.reddit.com/user/needamod-bot",
	},
	{
		id: "strat-roulette",
		title: "Game Strategy Generator",
		description:
			"Generate game strategies from a central database of game plans that users can contribute to and read from.",
		color: "#fd9d24",
		preview: {image: stratRoulette, fullscreen: true},
		techIds: ["php", "mysql", "javascript"],
		repo: "https://github.com/MatthewWid/OW-StratRoulette",
	},
	{
		id: "whirl",
		title: "Browser Game Engine",
		description:
			"Canvas-based browser game engine that handles rendering, game states, user input and object management on-top of a custom event system.",
		color: "#00b7ff",
		preview: {image: whirl, width: 50},
		techIds: ["sass", "node", "javascript", "webpack"],
		repo: "https://github.com/MatthewWid/Whirl",
		docs: "https://matthewwid.github.io/Whirl/",
	},
];
