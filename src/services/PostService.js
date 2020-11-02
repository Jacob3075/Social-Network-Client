import axios from "axios";
import Post from "../models/post";

export default {

	// getList: async function (page) {
	// 	try {
	// 		let url;
	// 		if (page != null && page > 1) {
	// 			url = "https://reqres.in/api/users?per_page=2&page=" + page;
	// 		} else {
	// 			url = "https://reqres.in/api/users?per_page=2";
	// 		}
	// 		const response = await axios.get(url);
	// 		return response.data;
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// },

	getPosts: function() {
		return [
			new Post(1, "Post 1", "Body 1", new Date(), "https://source.unsplash.com/random"),
			new Post(2, "Post 2", "Body 2", new Date(), "https://source.unsplash.com/random"),
			new Post(3, "Post 3", "Body 3", new Date(), "https://source.unsplash.com/random"),
			new Post(4, "Post 4", "Body 4", new Date(), "https://source.unsplash.com/random"),
			new Post(5, "Post 5", "Body 5", new Date(), "https://source.unsplash.com/random"),
			new Post(6, "Post 6", "Body 6", new Date(), "https://source.unsplash.com/random"),
			new Post(7, "Post 7", "Body 7", new Date(), "https://source.unsplash.com/random"),
			new Post(8, "Post 8", "Body 8", new Date(), "https://source.unsplash.com/random"),
			new Post(9, "Post 9", "Body 9", new Date(), "https://source.unsplash.com/random"),
			new Post(10, "Post 10", "Body 10", new Date(), "https://source.unsplash.com/random"),
		];
	},
};
