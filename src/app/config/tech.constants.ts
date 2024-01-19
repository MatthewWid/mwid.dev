import {StaticImageData} from "next/image";
import aws from "@/assets/images/tech/aws.svg";
import babel from "@/assets/images/tech/babel.svg";
import bitbucket from "@/assets/images/tech/bitbucket.svg";
import git from "@/assets/images/tech/git.svg";
import github from "@/assets/images/tech/github.svg";
import koa from "@/assets/images/tech/koa.svg";
import mongodb from "@/assets/images/tech/mongodb.svg";
import node from "@/assets/images/tech/node.png";
import npm from "@/assets/images/tech/npm.svg";
import php from "@/assets/images/tech/php.svg";
import react from "@/assets/images/tech/react.svg";
import redux from "@/assets/images/tech/redux.svg";
import sass from "@/assets/images/tech/sass.png";
import socketIo from "@/assets/images/tech/socket-io.svg";
import sqlite from "@/assets/images/tech/sqlite.svg";
import ts from "@/assets/images/tech/ts.png";
import webpack from "@/assets/images/tech/webpack.svg";
import yarn from "@/assets/images/tech/yarn.svg";
import next from "@/assets/images/tech/next.svg";
import postgres from "@/assets/images/tech/postgres.svg";
import docker from "@/assets/images/tech/docker.svg";
import python from "@/assets/images/tech/python.svg";
import storybook from "@/assets/images/tech/storybook.svg";
import cypress from "@/assets/images/tech/cypress.svg";

export interface TechInfo {
	name: string;
	url: string;
	logo: StaticImageData;
}

export const techIdToInfo: Record<string, TechInfo> = {
	react: {
		name: "React",
		url: "https://reactjs.org/",
		logo: react,
	},
	redux: {
		name: "Redux",
		url: "https://redux.js.org/",
		logo: redux,
	},
	node: {
		name: "Node",
		url: "https://nodejs.org/",
		logo: node,
	},
	ts: {
		name: "TypeScript",
		url: "https://www.typescriptlang.org/",
		logo: ts,
	},
	next: {
		name: "Next.js",
		url: "https://nextjs.org/",
		logo: next,
	},
	sass: {
		name: "SASS",
		url: "https://sass-lang.com/",
		logo: sass,
	},
	cypress: {
		name: "Cypress",
		url: "https://www.cypress.io/",
		logo: cypress,
	},
	postgres: {
		name: "PostgreSQL",
		url: "https://www.postgresql.org/",
		logo: postgres,
	},
	mongodb: {
		name: "MongoDB",
		url: "https://www.mongodb.com/",
		logo: mongodb,
	},
	koa: {
		name: "Koa",
		url: "https://koajs.com/",
		logo: koa,
	},
	php: {
		name: "PHP",
		url: "https://php.net/",
		logo: php,
	},
	socketIo: {
		name: "Socket.IO",
		url: "https://socket.io/",
		logo: socketIo,
	},
	storybook: {
		name: "Storybook",
		url: "https://storybook.js.org/",
		logo: storybook,
	},
	sqlite: {
		name: "SQLite",
		url: "https://www.sqlite.org/",
		logo: sqlite,
	},
	webpack: {
		name: "webpack",
		url: "https://webpack.js.org/",
		logo: webpack,
	},
	babel: {
		name: "Babel",
		url: "https://babeljs.io/",
		logo: babel,
	},
	yarn: {
		name: "Yarn",
		url: "https://yarnpkg.com/",
		logo: yarn,
	},
	npm: {
		name: "npm",
		url: "https://www.npmjs.com/",
		logo: npm,
	},
	aws: {
		name: "AWS",
		url: "https://aws.amazon.com/",
		logo: aws,
	},
	docker: {
		name: "Docker",
		url: "https://www.docker.com/",
		logo: docker,
	},
	github: {
		name: "GitHub",
		url: "https://github.com/",
		logo: github,
	},
	bitbucket: {
		name: "BitBucket",
		url: "https://bitbucket.org/product/",
		logo: bitbucket,
	},
	git: {
		name: "git",
		url: "https://git-scm.com/",
		logo: git,
	},
	python: {
		name: "Python",
		url: "https://www.python.org/",
		logo: python,
	},
};
