import axios from "axios";

const url = "http://localhost:8080/users/";

const UserService = () => {
	let jwtToken = "";
	let userId = "";
	let followedTopics = [];
	let registeredEvents = [];

	return {
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
			return await axios
				.post(url + "sign-in", {
					userName,
					password,
				})
				.then((response) => {
					if (response.status === 200) {
						jwtToken = response.data.token;
						userId = response.data.user.id;
						followedTopics = response.data.user.followedTopics;
						registeredEvents = response.data.user.registeredEvents;
					}
					return response.status;
				})
				.catch((error) => error.response.status);
		},

		logout: () => {
			jwtToken = "";
			userId = "";
			followedTopics = [];
			registeredEvents = [];
		},

		followNewTopic: async (topicId) => {
			return await axios
				.post(
					url + "follow-topic",
					{ topicId },
					{
						headers: {
							Authorization: `Basic ${jwtToken}`,
						},
					}
				)
				.then((response) => {
					return response.status === 200;
				})
				.catch((error) => error.response.status);
		},

		registerNewTopic: async (eventId) => {
			return await axios
				.post(
					url + "register-event",
					{ eventId },
					{
						headers: {
							Authorization: `Basic ${jwtToken}`,
						},
					}
				)
				.then((response) => {
					return response.status === 200;
				})
				.catch((error) => error.response.status);
		},
	};
};

export const userService = UserService();
