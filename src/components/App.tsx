import { Theme } from "../types/theme";
import Header from "./Header";
import Layout from "./Layout";
import Speakers from "./Speakers";

function App() {
	return (
		<Layout initialTheme={Theme.Dark}>
			<div>
				<Header />
				<Speakers />
			</div>
		</Layout>
	);
}

export default App;
