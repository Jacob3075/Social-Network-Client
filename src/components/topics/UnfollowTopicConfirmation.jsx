import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import { Button } from "@material-ui/core";
import { userService } from "../../services/UserService";

const UnfollowTopicConfirmation = ({ handleClose, topicId, topicName, setReload }) => {
	const handleUnFollow = () => {
		userService
			.followNewTopic(topicId, true)
			.then((response) => {
				handleClose();
				setReload(true);
			})
			.catch((error) => console.log(error));
	};
	return (
		<>
			<DialogContent>
				<DialogContentText>
					By unfollowing this topic, you won't receive any updates in future from this
					Topic.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary">
					Cancel
				</Button>
				<Button onClick={handleUnFollow} color="primary">
					Unfollow
				</Button>
			</DialogActions>
		</>
	);
};

export default UnfollowTopicConfirmation;
