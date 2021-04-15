import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import postReducer from "../containers/features/Posts/postSlice";
import createSagaMiddleware from "redux-saga";
import saga from "./sagas";

let sagaMiddleware = createSagaMiddleware();
let middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
	reducer: {
		posts: postReducer,
	},
	middleware,
});

sagaMiddleware.run(saga);
