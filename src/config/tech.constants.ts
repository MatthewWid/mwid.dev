import {StaticImageData} from "next/image";
import html from "@/assets/images/tech/html.svg";
import css from "@/assets/images/tech/css.svg";
import javascript from "@/assets/images/tech/javascript.png";
import aws from "@/assets/images/tech/aws.svg";
import babel from "@/assets/images/tech/babel.svg";
import bitbucket from "@/assets/images/tech/bitbucket.svg";
import git from "@/assets/images/tech/git.svg";
import github from "@/assets/images/tech/github.svg";
import koa from "@/assets/images/tech/koa.svg";
import mongodb from "@/assets/images/tech/mongodb.svg";
import mongoose from "@/assets/images/tech/mongoose.png";
import node from "@/assets/images/tech/node.png";
import npm from "@/assets/images/tech/npm.svg";
import php from "@/assets/images/tech/php.svg";
import react from "@/assets/images/tech/react.svg";
import redux from "@/assets/images/tech/redux.svg";
import sass from "@/assets/images/tech/sass.png";
import socketIo from "@/assets/images/tech/socket-io.svg";
import mysql from "@/assets/images/tech/mysql.svg";
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
import cloudinary from "@/assets/images/tech/cloudinary.svg";
import trello from "@/assets/images/tech/trello.svg";
import express from "@/assets/images/tech/express.png";
import nest from "@/assets/images/tech/nest.svg";
import ecs from "@/assets/images/tech/ecs.svg";
import ec2 from "@/assets/images/tech/ec2.svg";
import s3 from "@/assets/images/tech/s3.svg";
import cdk from "@/assets/images/tech/cdk.png";
import bamboo from "@/assets/images/tech/bamboo.svg";
import jira from "@/assets/images/tech/jira.svg";
import webflow from "@/assets/images/tech/webflow.svg";
import access from "@/assets/images/tech/access.svg";
import vba from "@/assets/images/tech/vba.svg";

export interface TechInfo {
	name: string;
	url: string;
	logo: StaticImageData;
}

export const techIdToInfo: Record<string, TechInfo> = {
	html: {
		name: "HTML",
		url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
		logo: html,
	},
	css: {
		name: "CSS",
		url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
		logo: css,
	},
	javascript: {
		name: "JavaScript",
		url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		logo: javascript,
	},
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
	mongoose: {
		name: "Mongoose",
		url: "https://mongoosejs.com/",
		logo: mongoose,
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
	mysql: {
		name: "MySQL",
		url: "https://www.mysql.com/",
		logo: mysql,
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
	cloudinary: {
		name: "Cloudinary",
		url: "https://cloudinary.com/",
		logo: cloudinary,
	},
	trello: {
		name: "Trello",
		url: "https://trello.com/",
		logo: trello,
	},
	express: {
		name: "Express",
		url: "https://expressjs.com/",
		logo: express,
	},
	nest: {
		name: "Nest",
		url: "https://nestjs.com/",
		logo: nest,
	},
	ecs: {
		name: "ECS",
		url: "https://aws.amazon.com/ecs/",
		logo: ecs,
	},
	ec2: {
		name: "EC2",
		url: "https://aws.amazon.com/ec2/",
		logo: ec2,
	},
	s3: {
		name: "S3",
		url: "https://aws.amazon.com/s3/",
		logo: s3,
	},
	cdk: {
		name: "CDK",
		url: "https://aws.amazon.com/cdk/",
		logo: cdk,
	},
	bamboo: {
		name: "Bamboo",
		url: "https://www.atlassian.com/software/bamboo",
		logo: bamboo,
	},
	jira: {
		name: "Jira",
		url: "https://www.atlassian.com/software/jira",
		logo: jira,
	},
	webflow: {
		name: "Webflow",
		url: "https://webflow.com/",
		logo: webflow,
	},
	access: {
		name: "Microsoft Access",
		url: "https://www.microsoft.com/en-au/microsoft-365/access",
		logo: access,
	},
	vba: {
		name: "Visual Basic for Applications",
		url: "https://learn.microsoft.com/en-us/office/vba/api/overview/",
		logo: vba,
	},
};
