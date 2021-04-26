import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../containers/features/Counter/counterSlice";
import postReducer from "../containers/features/Posts/postSlice";
// import createSagaMiddleware from "redux-saga";
// import saga from "./sagas";

// let sagaMiddleware = createSagaMiddleware();
// let middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const reducer = {
	posts: postReducer,
	counter: counterReducer,
};

export const store = configureStore({
	reducer,
	// middleware,
});

// sagaMiddleware.run(saga);
