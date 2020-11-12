import axios from "axios";
import Topic from "../models/Topic";

export default {
	getCommentsById: async (page) => {
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

	mockGetTopics: (userId) => [
		new Topic(1, "Topic 1", 1, 1, 1, "Topic 1"),
		new Topic(2, "Topic 2", 2, 2, 2, "Topic 2"),
		new Topic(3, "Topic 3", 3, 3, 3, "Topic 3"),
		new Topic(4, "Topic 4", 4, 4, 4, "Topic 4"),
		new Topic(5, "Topic 5", 5, 5, 5, "Topic 5"),
		new Topic(6, "Topic 6", 6, 6, 6, "Topic 6"),
		new Topic(7, "Topic 7", 7, 7, 7, "Topic 7"),
		new Topic(8, "Topic 8", 8, 8, 8, "Topic 8"),
		new Topic(9, "Topic 9", 9, 9, 9, "Topic 9"),
		new Topic(10, "Topic 10", 10, 10, 10, "Topic 10"),
	],

	mockGetTopicById: (topicId) => new Topic(1, "Topic1", 1, 1, 1, "Topic 1"),

	createNewTopic: (userId, topic) => {},
};
