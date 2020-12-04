import axios from "axios";
import { userService } from "./UserService";
import Post from "../models/Post";
import Comment from "../models/Comment";

const url = "http://localhost:8080/posts/";

export const getPostsFromFollowedTopics = async () => {
	return await axios
		.post(
			url + "topic",
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
						post.image,
						post.userName,
						post.topicName
					)
			)
		)
		.catch((error) => error.response.status);
};

export const getPostsFromTopic = async (topicId) => {
	return await axios
		.get(url + "topic/" + topicId, userService.getHeaderData())
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
						post.image,
						post.userName,
						post.topicName
					)
			)
		)
		.catch((error) => error.response.status);
};

export const createNewPost = async ({ description, image, topicId, userId, topicName }) => {
	const bodyFormData = new FormData();
	const headerData = userService.getHeaderData();

	bodyFormData.append("userId", userId);
	bodyFormData.append("topicId", topicId);
	bodyFormData.append("description", description);
	bodyFormData.append("image", image);
	bodyFormData.append("userName", userService.getUserName());
	bodyFormData.append("topicName", topicName);

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
					responsePost.userName,
					responsePost.topicName
				)
		)
		.catch((error) => console.log(error));
};

export const likePost = async (postId, unLike) => {
	const queryString = unLike ? "?unLike=true" : "";
	return await axios
		.post(
			url + "likes/" + queryString,
			{
				postId,
				userId: userService.getUserId(),
				userName: userService.getUserName(),
			},
			userService.getHeaderData()
		)
		.then((response) => response)
		.catch((error) => console.log(error));
};

export const addComment = async (postId, comment) => {
	return await axios
		.post(
			url + "comments/",
			{
				comment,
				postId,
				userId: userService.getUserId(),
				userName: userService.getUserName(),
			},
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
					newComment.time,
					newComment.userName
				)
		)
		.catch((error) => console.log(error));
};
