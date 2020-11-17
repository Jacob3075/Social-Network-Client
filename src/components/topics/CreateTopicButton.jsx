import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopicTabCreate from "../create-button/CreateTopicsTab";

const useStyles = makeStyles(() => ({
	fabButton: {
		position: "absolute",
		top: "88%",
		left: 0,
		right: 0,
		margin: "0 auto",
	},
}));

const CreateTopicButton = () => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const classes = useStyles();

	return (
		<Fab color="secondary" className={classes.fabButton} onClick={handleClickOpen}>
			<AddIcon />
			<Dialog
				onClose={handleClose}
				open={open}
				fullWidth={true}
				style={{ overflow: "hidden" }}
			>
				<TopicTabCreate />
			</Dialog>
		</Fab>
	);
};

export default CreateTopicButton;
