import {Title} from "./features/title";
import {About} from "./features/about";
import {ProjectList} from "./features/projects";
import {Contact} from "./components/Contact";

export default function RootPage() {
	return (
		<>
			<Title />
			<About />
			<ProjectList />
			<Contact />
		</>
	);
}
