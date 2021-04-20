import { createSlice } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { callAPI } from "../../../services/api";
import axios from "axios";

const initialState = {
	loading: true,
	posts: [],
	hasError: "",
};

const postSlice = createSlice({
	name: "POST",
	initialState,
	reducers: {
		loadingAction: (state, { payload }) => {
			state.loading = payload;
		},
		postAction: (state, { payload }) => {
			state.posts.push(...payload);
		},
		errorAction: (state, { payload }) => {
			state.hasError = payload;
		},
	},
});

export const { loadingAction, postAction, errorAction } = postSlice.actions;

//? Redux Thunk Example
export const fetchPosts = () => async (dispatch) => {
	dispatch(loadingAction(true));
	try {
		const { data } = await axios.get(`${process.env.REACT_APP_URL}/posts`);
		// console.log(data);
		dispatch(postAction(data));
	} catch (error) {
		// console.log(error);
		dispatch(errorAction(error.message));
	}
};

//? Redux Saga Example
export function* fetchPostsSaga() {
	try {
		const { data } = yield call(() => callAPI({ url: `${process.env.REACT_APP_URL}/posts`, method: "GET" }));
		yield put(loadingAction(false));
		// console.log(data);
		yield put(postAction(data));
	} catch (error) {
		yield put(loadingAction(false));
		yield put(errorAction(error.message));
	}
}

export default postSlice.reducer;
