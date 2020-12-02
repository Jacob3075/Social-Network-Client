import axios from "axios";
import Post from "../models/Post";
import Comment from "../models/Comment";
import { userService } from "./UserService";

const url = "http://localhost:8080/posts/";

export const getPostsFromFollowedTopics = async (pageNumber, pageSize) => {
	const queryString = `?pageNumber=${pageNumber}&pageSize=${pageSize}`;
	return await axios.post(
		url + "topic" + queryString,
		{ topicIds: userService.getFollowedTopics() },
		userService.getHeaderData()
	)
		.then(response => response)
		.catch((error) => console.log(error));
};

export const getPostsFromTopic = async (topicId) => {
	return await axios.get(url + "topic/" + topicId)
		.then(response => response)
		.catch((error) => console.log(error));
};

//TODO USE MPFD
export const creatNewPost = async (post) => {
	return await axios.post(
		url + "",
		{ ...post },
		userService.getHeaderData()
	)
		.then(response => response)
		.catch((error) => console.log(error));
};

export default {
	mockGetPosts: () => [
		new Post("1", "1", "1", "Description", "Time", 10, [new Comment("1", "1", "1", "Comment 1", "Time")], "https://source.unsplash.com/random"),
		new Post("2", "2", "2", "Description", "Time", 25, [new Comment("2", "2", "2", "Comment 2", "Time")], "https://source.unsplash.com/random"),
		new Post("3", "3", "3", "Description", "Time", 32, [new Comment("3", "3", "3", "Comment 3", "Time")], "https://source.unsplash.com/random"),
		new Post("4", "4", "4", "Description", "Time", 10, [new Comment("4", "4", "4", "Comment 4", "Time")], "https://source.unsplash.com/random"),
		new Post("5", "5", "5", "Description", "Time", 13, [new Comment("5", "5", "5", "Comment 5", "Time")], "https://source.unsplash.com/random"),
		new Post("6", "6", "6", "Description", "Time", 11, [new Comment("6", "6", "6", "Comment 6", "Time")], "https://source.unsplash.com/random"),
		new Post("7", "7", "7", "Description", "Time", 12, [new Comment("7", "7", "7", "Comment 7", "Time")], "https://source.unsplash.com/random"),
		new Post("8", "8", "8", "Description", "Time", 15, [new Comment("8", "8", "8", "Comment 8", "Time")], "https://source.unsplash.com/random"),
		new Post("9", "9", "9", "Description", "Time", 18, [new Comment("9", "9", "9", "Comment 9", "Time")], "https://source.unsplash.com/random"),
		new Post("10", "10", "10", "Description", "Time", 10, [new Comment("10", "10", "10", "Comment 10", "Time")], "https://source.unsplash.com/random")
	]

};
