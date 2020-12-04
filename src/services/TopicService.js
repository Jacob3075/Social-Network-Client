import Topic from "../models/Topic";
import axios from "axios";
import { userService } from "./UserService";

const url = "http://localhost:8080/topics/";

export const getAllTopics = async () => {
	return await axios
		.get(url, userService.getHeaderData())
		.then((response) => response.data)
		.then((responseTopics) =>
			responseTopics.map(
				(topic) =>
					new Topic(topic._id, topic.topicName, topic.createdUserId, topic.description)
			)
		)
		.catch((error) => error.response.status);
};

export const getTopicById = async (topicId) => {
	return await axios
		.get(url + "id/" + topicId, userService.getHeaderData())
		.then((response) => response.data)
		.then(
			(responseTopic) =>
				new Topic(
					responseTopic._id,
					responseTopic.topicName,
					responseTopic.createdUserId,
					responseTopic.description
				)
		)
		.catch((error) => error.response.status);
};

export const getTopicByName = async (topicName) => {
	return await axios
		.get(url + "name/" + topicName, userService.getHeaderData())
		.then((response) => response.data)
		.then(
			(responseTopic) =>
				new Topic(
					responseTopic._id,
					responseTopic.topicName,
					responseTopic.createdUserId,
					responseTopic.description
				)
		)
		.catch((error) => error.response.status);
};

export const getTopicFollowedByUser = async () => {
	return await axios
		.post(url + "id", { ids: userService.getFollowedTopics() }, userService.getHeaderData())
		.then((response) => response.data)
		.then((responseTopics) =>
			responseTopics.map(
				(topic) =>
					new Topic(topic._id, topic.topicName, topic.createdUserId, topic.description)
			)
		)
		.catch((error) => error.response.status);
};

export const createNewTopic = async ({ topicName, description, createdUserId }) => {
	return await axios
		.post(url, { topicName, description, createdUserId }, userService.getHeaderData())
		.then((response) => response.data)
		.then(
			(responseTopic) =>
				new Topic(
					responseTopic._id,
					responseTopic.topicName,
					responseTopic.createdUserId,
					responseTopic.description
				)
		)
		.catch((error) => error.response.status);
};
