import Topic from "../models/Topic";
import axios from "axios";
import { userService } from "./UserService";

const url = "http://localhost:8080/topics/";

export const getAllTopics = async () => {
	return await axios
		.get(url)
		.then((response) => response.data)
		.catch((error) => error.response.status);
};

export const getTopicById = async (topicId) => {
	return await axios
		.get(url + "id/" + topicId)
		.then((response) => response.data)
		.catch((error) => error.response.status);
};

export const getTopicByName = async (topicName) => {
	return await axios
		.get(url + "name/" + topicName)
		.then((response) => response.data)
		.catch((error) => error.response.status);
};

export const getTopicFollowedByUser = async () => {
	return await axios
		.post(
			url + "id",
			{ ids: userService.getFollowedTopics() },
			userService.getHeaderData()
		)
		.then((response) => response.data)
		.then((responseTopics) => responseTopics.map((topic) => new Topic(topic._id, topic.topicName, topic.createdUserId, topic.description)))
		.catch((error) => error.response.status);
};

export const createNewTopic = async (topicName, description, createdUserId) => {
	return await axios
		.post(
			url,
			{ topicName, description, createdUserId },
			userService.getHeaderData()
		)
		.then((response) => response.data)
		.catch((error) => error.response.status);
};

export const mockGetTopics = (userId) => [
	new Topic(1, "Topic 1", 1, 1, 1, "Topic 1"),
	new Topic(2, "Topic 2", 2, 2, 2, "Topic 2"),
	new Topic(3, "Topic 3", 3, 3, 3, "Topic 3"),
	new Topic(4, "Topic 4", 4, 4, 4, "Topic 4"),
	new Topic(5, "Topic 5", 5, 5, 5, "Topic 5"),
	new Topic(6, "Topic 6", 6, 6, 6, "Topic 6"),
	new Topic(7, "Topic 7", 7, 7, 7, "Topic 7"),
	new Topic(8, "Topic 8", 8, 8, 8, "Topic 8"),
	new Topic(9, "Topic 9", 9, 9, 9, "Topic 9"),
	new Topic(10, "Topic 10", 10, 10, 10, "Topic 10")
];

export const mockGetTopicById = (topicId) => new Topic(1, "Topic1", 1, "Description");
