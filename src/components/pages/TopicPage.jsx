import React, { useEffect, useState } from "react";
import MyAppBar from "../MyAppBar";
import MainContent from "../MainContent";
import { userService } from "../../services/UserService";
import { useHistory, useParams } from "react-router-dom";
import { getPostsFromTopic } from "../../services/PostService";
import { Typography } from "@material-ui/core";
import { getEventsByTopic } from "../../services/EventService";
import { getTopicById } from "../../services/TopicService";

const TopicPage = () => {
	const history = useHistory();
	const { topicId } = useParams();

	const [reload, setReload] = useState(false);
	const [topicName, setTopicName] = useState("");

	useEffect(() => {
		if (!userService.isLoggedIn()) history.push("/login");

		getTopicById(topicId)
			.then((topic) => setTopicName(topic.topicName))
			.catch((error) => console.log(error));
	}, []);

	const loadEvents = () => {
		return getEventsByTopic(topicId)
			.then((response) => {
				if (Array.isArray(response)) {
					return response;
				} else {
					console.log("ERROR:" + response);
				}
			})
			.catch((error) => console.log(error));
	};

	const loadPosts = () => {
		return getPostsFromTopic(topicId)
			.then((response) => {
				if (Array.isArray(response)) {
					return response;
				}
			})
			.catch((error) => console.log(error));
	};

	return (
		<>
			<MyAppBar title={""} setReload={setReload} reload={reload} />
			<Typography variant="subtitle"> Topic Name : </Typography>
			<Typography variant="body"> Topic Description </Typography>
			<MainContent
				loadPosts={loadPosts}
				loadEvents={loadEvents}
				reload={reload}
				setReload={setReload}
			/>
		</>
	);
};

export default TopicPage;
