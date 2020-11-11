import PropTypes from 'prop-types'
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import UnfollowTopicConfirmation from "./UnfollowTopicConfirmation";

const TopicsListItem = ({
	id,
	name,
	creatorId,
	description,
}) => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<ListItem button>
			<ListItemText primary={name} />
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
	);
};

TopicsListItem.propTypes = {
  creatorId: PropTypes.any,
  description: PropTypes.any,
  id: PropTypes.any.isRequired,
  name: PropTypes.any.isRequired,
}

export default TopicsListItem;
