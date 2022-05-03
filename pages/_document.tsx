import { Html, Head, Main, NextScript } from "next/document";
import {
	ApolloProvider,
	ApolloClient,
	createHttpLink,
	InMemoryCache,
} from "@apollo/client";


export default function Document() {
	// Apollo imports
	const httpLink = createHttpLink({
		uri: "http://localhost:4000",
	});

	const client = new ApolloClient({
		link: httpLink,
		cache: new InMemoryCache(),
	});

	return (
		<Html>
			<Head>
				<link
					rel='stylesheet'
					href='https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css'
				/>
			</Head>
			<body>
				<ApolloProvider client={client}>
					<Main />
				</ApolloProvider>
				<NextScript />
			</body>
		</Html>
	);
}
