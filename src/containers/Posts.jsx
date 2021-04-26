import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
	const [posts, setpost] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get(`${process.env.REACT_APP_URL}/poss`);
				console.log("API call Response --> Sucessfull -->", data);
				setpost(data);
			} catch (error) {
				console.log("API call Response --> Error -->", error);
				return error;
			}
		})();
	}, []);

	return (
		<div>
			{posts.map((post) => (
				<ul>
					<li>{post.title}</li>
				</ul>
			))}
		</div>
	);
};

export default Posts;
