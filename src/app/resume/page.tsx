import {Metadata} from "next";
import {ResumeTitle} from "@/features/resume";

export const metadata: Metadata = {
	title: "Resume",
};

export default function ResumePage() {
	return (
		<>
			<ResumeTitle />
		</>
	);
}
