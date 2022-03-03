import { Head, Html, Main, NextScript } from "next/document";

function MyDocument() {
	return (
		<Html lang="en">
			<Head>
				<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
				<link href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" rel="stylesheet" />
				<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css?family=Open+Sans&amp;display=optional" rel="stylesheet" />
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

export default MyDocument;
