import {Metadata} from "next";
import {ResumeTitle, JobList} from "@/features/resume";

export const metadata: Metadata = {
	title: "Resume",
};

export default function ResumePage() {
	return (
		<>
			<ResumeTitle />
			<JobList />
		</>
	);
}
