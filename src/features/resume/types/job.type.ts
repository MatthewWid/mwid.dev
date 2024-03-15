import {StaticImageData} from "next/image";

export interface Job {
	id: string;
	title: string;
	subtitle: string;
	description: string | string[];
	color: string;
	preview: StaticImageData;
	techIds: string[];
	website?: string;
	linkedin?: string;
}
