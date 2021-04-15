/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sagaActions } from "../../../app/sagaActions";
import { fetchPosts, fetchPostsSaga } from "./postSlice";
const Post = () => {
	// Redux State and Dispatch
	const state = useSelector(({ posts }) => posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: sagaActions.FETCH_POSTS });
		return () => {};
	}, []);
	return (
		<>
			{state.hasError && <p>Something Went Wrong</p>}
			{state.loading === true && <p>Loading....</p>}
			{state.posts.length >= 1 && state.posts.map((post) => <p key={post.id}>{post.title}</p>)}
		</>
	);
};

export default Post;
