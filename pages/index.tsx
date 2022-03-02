import Head from "next/head";
import App from "../src/components/App";

function IndexPage() {
	return (
		<>
			<Head key="index-page-head">
				<title>Speaker Data - Index Page</title>
			</Head>
			<App />
		</>
	);
}

export default IndexPage;
