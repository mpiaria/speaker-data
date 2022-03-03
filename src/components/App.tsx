import AuthContextProvider from "../contexts/AuthContextProvider";
import { Theme } from "../types/theme";
import EnhancedHeader from "./Header";
import Header from "./Header";
import Layout from "./Layout";
import Speakers from "./Speakers";

function App() {
	return (
		<AuthContextProvider initialUser="Michael">
			<Layout initialTheme={Theme.Dark}>
				<div>
					<Header />
					<Speakers />
				</div>
			</Layout>
		</AuthContextProvider>
	);
}

export default App;
