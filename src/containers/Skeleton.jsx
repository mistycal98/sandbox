import Skeleton from "@material-ui/lab/Skeleton";

import React from "react";

const SkeletonExample = () => {
	return (
		<div
			style={{
				width: "20rem",
			}}
		>
			<Skeleton animation="wave" variant="circle" height="50px" width="50px" />
		</div>
	);
};

export default SkeletonExample;
