import axios from "axios";

export const callAPI = async ({ url, method, data }) => {
	return await axios({
		url,
		method,
		data,
	});
};

export const fetchPosts = async () => {
	try {
		const { data } = await axios.get(`${process.env.REACT_APP_URL}/posts`);
		console.log("API call Response --> Sucessfull -->", data);
		return data;
	} catch (error) {
		console.log("API call Response --> Error -->", error);
		return error;
	}
};
