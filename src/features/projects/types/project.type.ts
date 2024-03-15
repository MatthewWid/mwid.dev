import {StaticImageData} from "next/image";

export interface Project {
	id: string;
	title: string;
	subtitle?: string;
	description: string;
	color: string;
	preview: {
		image: StaticImageData;
		fullscreen?: boolean;
		width?: number;
	};
	techIds: string[];
	repo: string;
	demo?: string;
	docs?: string;
}
