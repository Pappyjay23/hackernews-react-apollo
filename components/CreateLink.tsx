import * as React from "react";
import { useMutation, gql } from "@apollo/client";
import { Router, useRouter } from 'next/router'

const CREATE_LINK_MUTATION = gql`
	mutation PostMutation($description: String!, $url: String!) {
		post(description: $description, url: $url) {
			id
			createdAt
			url
			description
		}
	}
`;

const CreateLink = () => {
	const router = useRouter();

	const [formState, setFormState] = React.useState({
		description: "",
		url: "",
	});

	const [createLink] = useMutation(CREATE_LINK_MUTATION, {
		variables: {
			description: formState.description,
			url: formState.url,
		},
		onCompleted: () => router.push('/')
	});

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					createLink();
				}}>
				<div className='flex flex-column mt3'>
					<input
						className='mb2'
						value={formState.description}
						onChange={(e) =>
							setFormState({
								...formState,
								description: e.target.value,
							})
						}
						type='text'
						placeholder='A description for the link'
					/>
					<input
						className='mb2'
						value={formState.url}
						onChange={(e) =>
							setFormState({
								...formState,
								url: e.target.value,
							})
						}
						type='text'
						placeholder='The URL for the link'
					/>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default CreateLink;
