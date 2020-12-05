import React, { useEffect, useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import UnfollowTopicConfirmation from "./UnfollowTopicConfirmation";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import { userService } from "../../services/UserService";

const TopicsListItem = ({ id, topicName, createdUserId, description, setReload }) => {
	const history = useHistory();

	const [open, setOpen] = useState(false);
	const [isFollowedTopic, setIsFollowedTopic] = useState(false);

	useEffect(() => {
		setIsFollowedTopic(userService.getFollowedTopics().includes(id));
	}, []);


	const handleButtonClick = () => {
		if (isFollowedTopic) {
			setOpen(true);
		} else {
			userService.followNewTopic(id, false)
				.then((response) => {
				})
				.catch((error) => {
				});
		}
	};

	const handleClose = () => {
		setOpen(false);
	};

	const goToTopicPage = () => {
		setReload(true);
		history.push(`/topic/${id}`);
	};

	const buttonText = isFollowedTopic ? "Following" : "Follow";

	const unFollowDialog = isFollowedTopic && (
		<Dialog onClose={handleClose} open={open}>
			<UnfollowTopicConfirmation
				handleClose={handleClose}
				topicName={topicName}
				topicId={id}
				setReload={setReload}
			/>
		</Dialog>
	);

	return (
		<Paper>
			<ListItem button>
				<ListItemText primary={topicName} secondaryText={description} onClick={goToTopicPage} />
				<Button
					variant="contained"
					color={isFollowedTopic ? "primary" : "secondary"}
					style={{
						float: "right",
						width: "2.5cm",
						height: "0.8cm"
					}}
					onClick={handleButtonClick}
				>
					{buttonText}
				</Button>
				{unFollowDialog}
			</ListItem>
		</Paper>
	);
};

export default TopicsListItem;
