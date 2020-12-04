import React, { useEffect, useState } from "react";
import MyAppBar from "../MyAppBar";
import MainContent from "../MainContent";
import { userService } from "../../services/UserService";
import { useHistory, useParams } from "react-router-dom";
import { getPostsFromTopic } from "../../services/PostService";
import { getEventsByTopic } from "../../services/EventService";

const TopicPage = () => {
	const history = useHistory();
	const { topicId } = useParams();

	const [reload, setReload] = useState(false);

	useEffect(() => {
		if (!userService.isLoggedIn()) history.push("/login");
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
			<MyAppBar title={""} setReload={setReload} />
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
