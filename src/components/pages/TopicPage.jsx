import React, { useEffect, useState } from "react";
import MyAppBar from "../MyAppBar";
import MainContent from "../MainContent";
import { userService } from "../../services/UserService";
import { useHistory, useParams } from "react-router-dom";
import { getPostsFromTopic } from "../../services/PostService";
import { getTopicByName } from "../../services/TopicService";
import { Typography } from "@material-ui/core";
import { getEventsByTopic } from "../../services/EventService";

const TopicPage = () => {
	const history = useHistory();
	const { topicId } = useParams();

	const [eventList, setEventList] = useState([]);
	const [postList, setPostList] = useState([]);
	const [hasMoreItems, setHasMoreItems] = useState(true);

	useEffect(() => {
		if (!userService.isLoggedIn()) history.push("/login");

		getEventsByTopic(topicId)
			.then((response) => {
				if (Array.isArray(response)) {
					setEventList(response);
				} else {
					console.log("ERROR:" + response);
				}
			})
			.catch((error) => console.log(error));
	}, []);

	const loadMoreData = (pageNumber) => {
		if (!userService.isLoggedIn()) {
			setHasMoreItems(false);
			return;
		}

		getPostsFromTopic(topicId, pageNumber, 10)
			.then((response) => {
				if (response.length > 0) {
					const newPosts = response;
					setPostList(postList.concat(newPosts));
					if (newPosts.length === 0) {
						setHasMoreItems(false);
					}
				} else setHasMoreItems(false);
			})
			.catch((error) => console.log(error));
	};

	return (
		<>
			<MyAppBar title="" />
			<Typography variant="subtitle"> Topic Name : </Typography>
			<Typography variant="body"> Topic Description </Typography>
			<MainContent
				postList={postList}
				eventList={eventList}
				loadMoreData={loadMoreData}
				hasMoreItems={hasMoreItems}
			/>
		</>
	);
};

export default TopicPage;
