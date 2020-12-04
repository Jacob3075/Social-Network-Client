import axios from "axios";
import Event from "../models/Event";

export default {
	getEventsById: async (page) => {
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

	mockGetEventsById: (userId) => [
		new Event(1, 1, "Topic1", "time1", "name1", "description1", "location1", "registered1", "image1"),
		new Event(1, 1, "Topic2", "time2", "name2", "description2", "location2", "registered2", "image2"),
		new Event(1, 1, "Topic3", "time3", "name3", "description3", "location3", "registered3", "image3"),
		new Event(1, 1, "Topic4", "time4", "name4", "description4", "location4", "registered4", "image4"),
		new Event(1, 1, "Topic5", "time5", "name5", "description5", "location5", "registered5", "image5"),
		new Event(1, 1, "Topic6", "time6", "name6", "description6", "location6", "registered6", "image6"),
		new Event(1, 1, "Topic7", "time7", "name7", "description7", "location7", "registered7", "image7"),
		new Event(1, 1, "Topic8", "time8", "name8", "description8", "location8", "registered8", "image8"),
	],
};
