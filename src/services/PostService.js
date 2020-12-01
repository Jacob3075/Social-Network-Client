import axios from "axios";
import Post from "../models/Post";
import Comment from "../models/Comment";

export default {
	getList: async (page) => {
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
	],

	createNewPost: (userId, post) => {
	},

	likedPost: (postId) => {
	}
};
