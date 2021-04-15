import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import mockAdapter from "axios-mock-adapter";
import { MemoryRouter, Route } from "react-router";
import Users from "../pages/Users";
import "@testing-library/jest-dom/extend-expect";

const mock = new mockAdapter(axios);
const url = `${process.env.REACT_APP_URL}/users/1`;

describe("Testing Dynamic Url Component", () => {
	it("Fetch Data and Display", async () => {
        mock.onGet(url).reply(200, { id: "1", name: "Leanne Graham" });
		render(
            <MemoryRouter initialEntries={["/users/1"]}>
				<Route path="/users/:id">
					<Users />
				</Route>
			</MemoryRouter>
		);
        expect(screen.getByTestId("loading")).toBeInTheDocument();
		await waitFor(() => screen.getByTestId("resolved"));
		expect(screen.getByTestId("resolved")).toBeInTheDocument();
	});
});
