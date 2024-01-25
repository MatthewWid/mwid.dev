import {Title} from "@/features/title";
import {About} from "@/features/about";
import {ProjectList} from "@/features/projects";

export default function RootPage() {
	return (
		<>
			<Title />
			<About />
			<ProjectList />
		</>
	);
}
