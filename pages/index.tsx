import Head from "next/head";
import App from "../src/components/App";

export default function IndexPage() {
	return (
		<>
			<Head key="index-page-head">
				<title>Speaker Data - Index Page</title>
			</Head>
			<App />
		</>
	);
}
