import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import UnfollowTopicConfirmation from "./UnfollowTopicConfirmation";
import { userService } from "../../services/UserService";

const TopicFollowButton = ({ isFollowedTopic, setReload, topicId, topicName }) => {

	const [open, setOpen] = useState(false);

	const handleButtonClick = () => {
		if (isFollowedTopic) {
			setOpen(true);
		} else {
			userService.followNewTopic(topicId, false)
				.then((response) => {
					setReload(true);
				})
				.catch((error) => {
				});
		}
	};

	const handleClose = () => {
		setOpen(false);
	};

	const buttonText = isFollowedTopic ? "Following" : "Follow";

	const unFollowDialog = isFollowedTopic && (
		<Dialog onClose={handleClose} open={open}>
			<UnfollowTopicConfirmation
				handleClose={handleClose}
				topicName={topicName}
				topicId={topicId}
				setReload={setReload}
			/>
		</Dialog>
	);

	return (
		<>
			<Button
				variant="contained"
				color={isFollowedTopic ? "primary" : "secondary"}
				style={{
					width: "2.5cm",
					height: "0.8cm"
				}}
				onClick={handleButtonClick}
			>
				{buttonText}
			</Button>
			{unFollowDialog}
		</>

	);
};

TopicFollowButton.propTypes = {
	isFollowedTopic: PropTypes.bool.isRequired,
	setReload: PropTypes.func.isRequired,
	topicId: PropTypes.string.isRequired,
	topicName: PropTypes.string.isRequired
};

export default TopicFollowButton;
