import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";
const Counter = () => {
	const { count } = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	return (
		<>
			<p data-testid="count">Count : {count}</p>
			<button
				data-testid="increment"
				onClick={() => {
					dispatch(increment());
				}}
			>
				Increment
			</button>
			<button
				data-testid="decrement"
				onClick={() => {
					dispatch(decrement());
				}}
			>
				Decrement
			</button>
		</>
	);
};

export default Counter;
