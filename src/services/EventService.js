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

export const getEventsByTopic = async (topicId) => {
	return await axios
		.get(`${url}topic/${topicId}`, userService.getHeaderData())
		.then((response) => response.data)
		.then((responseEvents) =>
			responseEvents.map(
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
		)
		.catch((error) => error.response.status);
};

export const getUsersRegisteredEvents = async () => {
	return await axios
		.post(`${url}id`, { ids: userService.getRegisteredEvents() }, userService.getHeaderData())
		.then((response) => response.data)
		.then((responseEvents) =>
			responseEvents.map(
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
		)
		.catch((error) => error.response.status);
};

export const updateEventRegistrations = async (eventId, unRegister) => {
	const queryString = unRegister ? "?unRegister=true" : "";
	const eventResponse = await axios
		.post(url + "register/" + queryString, { eventId }, userService.getHeaderData())
		.then((eventResponse) => eventResponse.status)
		.catch((error) => console.log(error));

	const userResponse = await userService
		.registerNewEvent(eventId, queryString)
		.then((userResponse) => userResponse.status)
		.catch((error) => console.log(error));

	return { userResponse, eventResponse };
};
