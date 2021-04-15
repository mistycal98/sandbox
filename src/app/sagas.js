import { takeEvery } from "redux-saga/effects";
import { sagaActions } from "./sagaActions";
import { fetchPostsSaga } from "../containers/features/Posts/postSlice";

export default function* rootSaga() {
	yield takeEvery(sagaActions.FETCH_POSTS, fetchPostsSaga);
}
