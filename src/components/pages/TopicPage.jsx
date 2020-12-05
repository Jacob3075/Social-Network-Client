import React, { useEffect, useState } from "react";
import MyAppBar from "../MyAppBar";
import MainContent from "../MainContent";
import { userService } from "../../services/UserService";
import { useHistory, useParams } from "react-router-dom";
import { getPostsFromTopic } from "../../services/PostService";
import { Button, Typography } from "@material-ui/core";
import { getEventsByTopic } from "../../services/EventService";
import { getTopicById } from "../../services/TopicService";
import Dialog from "@material-ui/core/Dialog";
import UnfollowTopicConfirmation from "../topics/UnfollowTopicConfirmation";

const TopicPage = () => {
	const history = useHistory();
	const { topicId } = useParams();

	const [reload, setReload] = useState(false);
	const [topicName, setTopicName] = useState("");
	const [description, setDescription] = useState("");

	useEffect(() => {
		if (!userService.isLoggedIn()) history.push("/login");

		getTopicById(topicId)
			.then((topic) => setTopicName(topic.topicName))
			.catch((error) => console.log(error));
		}, []);
	
		useEffect(() => {
		if (!userService.isLoggedIn()) history.push("/login");

		getTopicById(topicId)
			.then((topic) => setDescription(topic.description))
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

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const goToTopicPage = () => {
		setReload(true);
		history.push(`/topic/${topicId}`);
	};

	return (
		<>
			<MyAppBar title={""} setReload={setReload} reload={reload} />
			<Typography variant="h4" color="textPrimary">
				{topicName + "\xa0\xa0"}   
				<Button
					variant="contained"
					style={{
						width: "2.5cm",
						height: "0.7cm",
					}}
					onClick={handleClickOpen}
				>
					Following
				</Button>
				<Dialog onClose={handleClose} open={open}>
					<UnfollowTopicConfirmation
						handleClose={handleClose}
						topicName={topicName}
						topicId={topicId}
						setReload={setReload}
					/>
				</Dialog>
			</Typography>


			<Typography variant="h6">
				{description} 
			</Typography>
			
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
