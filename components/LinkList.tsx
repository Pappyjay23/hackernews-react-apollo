import React from "react";
import Link from "../components/Link";
import { useQuery, gql } from "@apollo/client";

const FEED_QUERY = gql`
	{
		feed {
			id
			links {
				id
				createdAt
				url
				description
			}
		}
	}
`;

const LinkList = () => {
	const { data } = useQuery(FEED_QUERY);

	return (
		<div>
			{data && (
				<>
					{data.feed.links.map((link: { id: React.Key | null | undefined; description: string; url: string; }): JSX.Element => (
                        <Link key={link.id} description={link.description} url={link.url} />
                    ))}
				</>
			)}
		</div>
	);
};

export default LinkList;
