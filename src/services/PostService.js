import axios from "axios";
import { userService } from "./UserService";
import Post from "../models/Post";
import Comment from "../models/Comment";

const url = "http://localhost:8080/posts/";

export const getPostsFromFollowedTopics = async (pageNumber, pageSize) => {
	const queryString = `?pageNumber=${pageNumber}&pageSize=${pageSize}`;
	return await axios
		.post(
			url + "topic" + queryString,
			{ topicIds: userService.getFollowedTopics() },
			userService.getHeaderData()
		)
		.then((response) => response.data)
		.then((responseTopics) =>
			responseTopics.map(
				(post) =>
					new Post(
						post._id,
						post.userId,
						post.topicId,
						post.description,
						post.time,
						post.likedUsers,
						post.comments,
						post.image
					)
			)
		)
		.catch((error) => error.response.status);
};

export const getPostsFromTopic = async (topicId, pageNumber, pageSize) => {
	const queryString = `?pageNumber=${pageNumber}&pageSize=${pageSize}`;

	return await axios
		.get(url + "topic/" + topicId + queryString, userService.getHeaderData())
		.then((response) => response.data)
		.then((responseTopics) =>
			responseTopics.map(
				(post) =>
					new Post(
						post._id,
						post.userId,
						post.topicId,
						post.description,
						post.time,
						post.likedUsers,
						post.comments,
						post.image
					)
			)
		)
		.catch((error) => error.response.status);
};

export const createNewPost = async ({ description, image, topicId, userId }) => {
	const bodyFormData = new FormData();
	const headerData = userService.getHeaderData();

	bodyFormData.append("userId", userId);
	bodyFormData.append("topicId", topicId);
	bodyFormData.append("description", description);
	bodyFormData.append("image", image);

	headerData["Content-Type"] = "multipart/form-data";

	return await axios
		.post(url + "", bodyFormData, headerData)
		.then((response) => response.data)
		.then(
			(responsePost) =>
				new Post(
					responsePost._id,
					responsePost.userId,
					responsePost.topicId,
					responsePost.description,
					responsePost.time,
					responsePost.likedUsers,
					responsePost.comments,
					responsePost.image
				)
		)
		.catch((error) => console.log(error));
};

export const likePost = async (postId, unLike) => {
	const queryString = unLike ? "?unLike=true" : "";
	return await axios
		.post(
			url + "likes/" + queryString,
			{ postId, userId: userService.getUserId() },
			userService.getHeaderData()
		)
		.then((response) => response)
		.catch((error) => console.log(error));
};

export const addComment = async (postId, comment) => {
	return await axios
		.post(
			url + "comments/",
			{ comment, postId, userId: userService.getUserId() },
			userService.getHeaderData()
		)
		.then((response) => response.data.newComment)
		.then(
			(newComment) =>
				new Comment(
					newComment._id,
					newComment.userId,
					newComment.postId,
					newComment.comment,
					newComment.time
				)
		)
		.catch((error) => console.log(error));
};
