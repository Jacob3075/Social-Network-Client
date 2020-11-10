import axios from "axios";
import Post from "../models/post";

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

	mockGetPosts: (page) => [
		new Post(
			1,
			"Author 1",
			"Body 1",
			new Date(),
			"https://source.unsplash.com/random",
			1,
			1
		),
		new Post(
			2,
			"Author 2",
			"Body 2",
			new Date(),
			"https://source.unsplash.com/random",
			2,
			2
		),
		new Post(
			3,
			"Author 3",
			"Body 3",
			new Date(),
			"https://source.unsplash.com/random",
			3,
			3
		),
		new Post(
			4,
			"Author 4",
			"Body 4",
			new Date(),
			"https://source.unsplash.com/random",
			4,
			4
		),
		new Post(
			5,
			"Author 5",
			"Body 5",
			new Date(),
			"https://source.unsplash.com/random",
			5,
			5
		),
		new Post(
			6,
			"Author 6",
			"Body 6",
			new Date().getDate(),
			"https://source.unsplash.com/random",
			6,
			6
		),
		new Post(
			7,
			"Author 7",
			"Body 7",
			new Date(),
			"https://source.unsplash.com/random",
			7,
			7
		),
		new Post(
			8,
			"Author 8",
			"Body 8",
			new Date(),
			"https://source.unsplash.com/random",
			8,
			8
		),
		new Post(
			9,
			"Author 9",
			"Body 9",
			new Date(),
			"https://source.unsplash.com/random",
			9,
			9
		),
		new Post(
			10,
			"Author 10",
			"Body 10",
			new Date(),
			"https://source.unsplash.com/random",
			10,
			10
		),
	],
};
