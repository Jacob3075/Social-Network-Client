import axios from "axios";
import { userService } from "./UserService";
import Post from "../models/Post";

const url = "http://localhost:8080/posts/";

export const getPostsFromFollowedTopics = async (pageNumber, pageSize) => {
	const queryString = `?pageNumber=${pageNumber}&pageSize=${pageSize}`;
	return await axios.post(
		url + "topic" + queryString,
		{ topicIds: userService.getFollowedTopics() },
		userService.getHeaderData()
	)
		.then((response) => response.data)
		.then((responseTopics) => responseTopics.map(
			(post) => new Post(
				post._id,
				post.userId,
				post.topicId,
				post.description,
				post.time,
				post.likedUsers,
				post.comments,
				post.image
			)
		))
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

export const likePost = async (postId, unLike) => {
	const queryString = unLike ? "?unLike=true" : "";
	return await axios.post(
		url + "likes/" + queryString,
		{ postId, userId: userService.getUserId() },
		userService.getHeaderData()
	)
		.then(response => response)
		.catch((error) => console.log(error));
};

export const addComment = async (postId, comment) => {
	return await axios.post(
		url + "comments/",
		{ comment, postId, userId: userService.getUserId() },
		userService.getHeaderData()
	)
		.then(response => response.data)
		.then(response => console.log(response))
		.catch((error) => console.log(error));
};
