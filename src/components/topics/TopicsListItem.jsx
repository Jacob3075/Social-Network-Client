import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import UnfollowTopicConfirmation from "./UnfollowTopicConfirmation";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";

const TopicsListItem = ({ id, topicName, createdUserId, description, setReload }) => {
	const history = useHistory();

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const goToTopicPage = () => {
		setReload(true);
		history.push(`/topic/${id}`);
	};

	return (
		<Paper>
			<ListItem button>
				<ListItemText primary={topicName} onClick={goToTopicPage} />
				<Button
					variant="contained"
					style={{
						float: "right",
						width: "2.5cm",
						height: "0.8cm",
					}}
					onClick={handleClickOpen}
				>
					Following
				</Button>
				<Dialog onClose={handleClose} open={open}>
					<UnfollowTopicConfirmation handleClose2={handleClose} />
				</Dialog>
			</ListItem>
		</Paper>
	);
};

export default TopicsListItem;
