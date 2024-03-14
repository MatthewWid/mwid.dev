import {Metadata} from "next";
import {Attribution} from "@/features/attribution";

export const metadata: Metadata = {
	title: "Attribution",
};

export default function AttributionPage() {
	return (
		<>
			<Attribution />
		</>
	);
}
