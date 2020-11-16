import axios from "axios";

const url = "http://localhost:8080/users/";

export default {
	getAllUsers: async () => {
		return await axios
			.get(url)
			.then((response) => response)
			.catch((error) => console.log(error));
	},

	signUp: async (userName, password) => {
		return await axios
			.post(url + "sign-up", {
				userName,
				password,
			})
			.then((response) => response)
			.catch((error) => console.log(error));
	},

	login: async (userName, password) => {
		const result = await axios
			.post(url + "sign-in", {
				userName,
				password,
			})
			.then((response) => response)
			.catch((error) => console.log(error));

		if (!result) {
			return false;
		} else {
			return result.status === 200;
		}
	},

	mockGetList: [{ id: 1 }],
};
