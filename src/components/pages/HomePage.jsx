import React, { useEffect, useState } from "react";
import MyAppBar from "../MyAppBar";
import MainContent from "../MainContent";
import { userService } from "../../services/UserService";
import { useHistory } from "react-router-dom";
import { getPostsFromFollowedTopics } from "../../services/PostService";
import { getEventsFromFollowedTopics } from "../../services/EventService";

const HomePage = () => {
	const history = useHistory();
	const [reload, setReload] = useState(false);

	useEffect(() => {
		if (!userService.isLoggedIn()) history.push("/login");
	});

	const loadEvents = () => {
		return getEventsFromFollowedTopics()
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
		return getPostsFromFollowedTopics()
			.then((response) => {
				if (Array.isArray(response)) {
					return response;
				}
			})
			.catch((error) => console.log(error));
	};

	return (
		<>
			<MyAppBar title="" setReload={setReload} reload={reload} />
			<MainContent
				loadPosts={loadPosts}
				loadEvents={loadEvents}
				reload={reload}
				setReload={setReload}
			/>
		</>
	);
};

HomePage.propTypes = {};

export default HomePage;
