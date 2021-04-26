import { render, screen } from "./test-utils";
import Counter from "../containers/features/Counter/Counter";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent } from "@testing-library/dom";

describe("Testing Redux Hooks Counter Component", () => {
	it("Use Selector and Use Dispatch Hook", () => {
		render(<Counter />, { initialState: { count: 0 } });
		expect(screen.getByTestId("count")).toHaveTextContent(0);
		fireEvent.click(screen.getByTestId("increment"));
		expect(screen.getByTestId("count")).toHaveTextContent(1);
		fireEvent.click(screen.getByTestId("decrement"));
		expect(screen.getByTestId("count")).toHaveTextContent(0);
	});
});
