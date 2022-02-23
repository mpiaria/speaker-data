import { Theme } from "../types/theme";
import Header from "./Header";
import Layout from "./Layout";
import Speakers from "./Speakers";

export default function App() {
	return (
		<Layout initialTheme={Theme.Dark}>
			<div>
				<Header />
				<Speakers />
			</div>
		</Layout>
	);
}
