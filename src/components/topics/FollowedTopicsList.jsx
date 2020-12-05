import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import TopicsListItem from "./TopicsListItem";

const useStyles = makeStyles((theme) => ({
	text: {
		padding: theme.spacing(2, 2, 0),
	},
	paper: {
		paddingBottom: 5,
	},
	list: {
		marginBottom: theme.spacing(2),
		height: "50vh",
		overflowY: "scroll",
	},
	button: {
		color: "white",
		marginLeft: "2em",
		marginTop: "0.5em",
	},
}));

const FollowedTopicsList = ({ followedTopics, setReload, reload }) => {
	const classes = useStyles();

	const [open, setOpen] = useState(false);

	const followedTopicsComponents = followedTopics.map((topic) => (
		<TopicsListItem key={topic.id} {...topic} setReload={setReload} />
	));

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button variant="text" className={classes.button} onClick={handleClickOpen}>
				Topics
			</Button>
			<Dialog open={open} fullWidth={true} onClose={handleClose}>
				<DialogContent>
					<DialogContentText>
						<Paper square className={classes.paper}>
							<Typography className={classes.text} variant="h5" gutterBottom>
								Topics
							</Typography>
							<List className={classes.list}>{followedTopicsComponents}</List>
						</Paper>
					</DialogContentText>
				</DialogContent>
			</Dialog>
		</>
	);
};

FollowedTopicsList.propTypes = {
	followedTopics: PropTypes.array.isRequired,
	reload: PropTypes.bool,
	setReload: PropTypes.func.isRequired
};

export default FollowedTopicsList;
