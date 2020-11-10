import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import { Button } from "@material-ui/core";

const UnfollowTopicConfirmation = (props) => (
	<>
		<DialogContent>
			<DialogContentText>
				By unfollowing this topic, you won't receive any updates in
				future from this Topic.
			</DialogContentText>
		</DialogContent>
		<DialogActions>
			<Button onClick={props.handleClose2} color="primary">
				Cancel
			</Button>
			<Button onClick={props.handleClose2} color="primary">
				Unfollow
			</Button>
		</DialogActions>
	</>
);

export default UnfollowTopicConfirmation;
