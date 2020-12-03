import axios from "axios";
import Event from "../models/Event";
import { userService } from "./UserService";

const url = "http://localhost:8080/events/";

export const createNewEvent = async ({ userId, topicId, name, description, location, time }) => {
	return await axios
		.post(
			url,
			{ userId, topicId, name, description, location, time },
			userService.getHeaderData()
		)
		.then((response) => response.data)
		.then(
			(responseEvent) =>
				new Event(
					responseEvent._id,
					responseEvent.userId,
					responseEvent.topicId,
					responseEvent.time,
					responseEvent.name,
					responseEvent.description,
					responseEvent.location,
					responseEvent.registered
				)
		)
		.catch((error) => error.response.status);
};

export default {
	getEventsById: async (page) => {
		try {
			let url;
			if (page != null && page > 1) {
				url = "https://reqres.in/api/users?per_page=2&page=" + page;
			} else {
				url = "https://reqres.in/api/users?per_page=2";
			}
			const response = await axios.get(url);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	},

	mockGetEventsById: (userId) => [
		new Event(1, 1, "Name 1", "Place 1", "Time 1", "Description 1"),
		new Event(2, 2, "Name 2", "Place 2", "Time 2", "Description 2"),
		new Event(3, 3, "Name 3", "Place 3", "Time 3", "Description 3"),
		new Event(4, 4, "Name 4", "Place 4", "Time 4", "Description 4"),
		new Event(5, 5, "Name 5", "Place 5", "Time 5", "Description 5"),
		new Event(6, 6, "Name 6", "Place 6", "Time 6", "Description 6"),
		new Event(7, 7, "Name 7", "Place 7", "Time 7", "Description 7"),
		new Event(8, 8, "Name 8", "Place 8", "Time 8", "Description 8"),
		new Event(9, 9, "Name 9", "Place 9", "Time 9", "Description 9"),
		new Event(10, 10, "Name 10", "Place 10", "Time 10", "Description 10"),
	],
};
