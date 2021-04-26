import React, { Suspense } from "react";
import Posts from "../containers/Posts";

const SuspenseComponent = () => {
	return (
		<>
			<Suspense fallback={<h1>Fetching Posts ....</h1>}>
				<Posts />
			</Suspense>
		</>
	);
};

export default SuspenseComponent;
