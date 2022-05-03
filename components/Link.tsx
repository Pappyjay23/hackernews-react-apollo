import React from "react";

interface LinkProps{
	description: string;
	url: string;
};

const Link = ({ description, url }: LinkProps) => {
	return (
		<div>
			<div>
				{description} ({url})
			</div>
		</div>
	);
};

export default Link;
