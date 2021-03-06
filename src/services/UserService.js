import axios from "axios";
import User from "../models/User";

const url = "http://localhost:8080/users/";

const UserService = () => {
	let jwtToken = "";
	let userId = "";
	let username = "";
	let followedTopics = [];
	let registeredEvents = [];
	let headerData = {};
	let isLoggedIn = false;

	return {
		isLoggedIn: () => isLoggedIn,

		getFollowedTopics: () => followedTopics,

		getRegisteredEvents: () => registeredEvents,

		getUserId: () => userId,

		getUserName: () => username,

		getHeaderData: () => headerData,

		signUp: async (userName, password) => {
			return await axios
				.post(url + "sign-up", {
					userName,
					password,
				})
				.then((response) => response.status)
				.catch((error) => error.response.status);
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
						username = userName;
						followedTopics = response.data.user.followedTopics;
						registeredEvents = response.data.user.registeredEvents;
						isLoggedIn = true;
						headerData = {
							headers: {
								Authorization: `Basic ${jwtToken}`,
							},
						};
						return response.status;
					}
				})
				.catch((error) => error.response.status);
		},

		logout: () => {
			jwtToken = "";
			userId = "";
			followedTopics = [];
			registeredEvents = [];
		},

		followNewTopic: async (topicId, unFollow) => {
			const queryString = unFollow ? "?unFollow=true" : "";

			return await axios
				.post(`${url}follow-topic${queryString}`, { topicId }, headerData)
				.then((response) => {
					if (unFollow) {
						followedTopics = followedTopics.filter(value => value !== topicId);
					} else {
						followedTopics.push(topicId);
					}
					return response;
				})
				.catch((error) => error.response.status);
		},

		registerNewEvent: async (eventId, unRegister) => {
			const queryString = unRegister ? "?unRegister=true" : "";

			return await axios
				.post(`${url}register-event${queryString}`, { eventId }, headerData)
				.then((response) => {
					if (unRegister) {
						registeredEvents = registeredEvents.filter((value) => value !== eventId);
					} else {
						registeredEvents.push(eventId);
					}
					return response;
				})
				.catch((error) => error.response.status);
		},
	};
};

export const getAllUsers = async () => {
	return await axios
		.get(url)
		.then((response) => response)
		.catch((error) => console.log(error));
};

export const getUserById = async (userId) => {
	return await axios
		.get(url + "id/" + userId)
		.then((response) => response.data)
		.then(
			(user) => new User(user._id, user.userName, user.followedTopics, user.registeredEvents)
		)
		.catch((error) => error.response.status);
};

export const userService = UserService();
