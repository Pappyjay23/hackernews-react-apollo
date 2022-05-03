import type { NextPage } from "next";
import Head from "next/head";
import LinkList from "../components/LinkList";
import {
	ApolloProvider,
	ApolloClient,
	createHttpLink,
	InMemoryCache,
} from "@apollo/client";

const Home: NextPage = () => {
	// Apollo imports
	const httpLink = createHttpLink({
		uri: "http://localhost:4000",
	});

	const client = new ApolloClient({
		link: httpLink,
		cache: new InMemoryCache(),
	});

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<ApolloProvider client={client}>
				<main className='body'>
					<LinkList />
				</main>
			</ApolloProvider>
		</div>
	);
};

export default Home;
