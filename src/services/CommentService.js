import axios from "axios";
import Comment from "../models/Comment";

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

	mockGetCommentsById: (id) => [
		new Comment(1, 1, 1, "Comment 1"),
		new Comment(2, 2, 2, "Comment 2"),
		new Comment(3, 3, 3, "Comment 3"),
		new Comment(4, 4, 4, "Comment 4"),
		new Comment(5, 5, 5, "Comment 5"),
		new Comment(6, 6, 6, "Comment 6"),
		new Comment(7, 7, 7, "Comment 7"),
		new Comment(8, 8, 8, "Comment 8"),
		new Comment(9, 9, 9, "Comment 9"),
		new Comment(10, 10, 10, "Comment 10"),
	],

	commentedOnPost: (userId, comment) => {},
};
