import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import CreateTopicButton from "./CreateTopicButton";
import TopicsListItem from "./TopicsListItem";
import { getTopicFollowedByUser } from "../../services/TopicService";
import Topic from "../../models/Topic";

const useStyles = makeStyles((theme) => ({
	text: {
		padding: theme.spacing(2, 2, 0)
	},
	paper: {
		paddingBottom: 50
	},
	list: {
		marginBottom: theme.spacing(2),
		height: "50vh",
		overflowY: "scroll"
	},
	button: {
		color: "white",
		marginLeft: "2em",
		marginTop: "0.5em"
	}
}));

const FollowedTopicsList = () => {
	const [open, setOpen] = useState(false);
	const [topicListItemComponents, setTopicListItemComponents] = useState([]);

	useEffect(() => {
		getTopicFollowedByUser()
			.then((response) => {
				setTopicListItemComponents(
					response
						.map((topic) => new Topic(topic._id, topic.topicName, topic.createdUserId, topic.description))
						.map((topic) => (
							<TopicsListItem key={topic.id} {...topic} />
						)));
			})
			.catch((error) => console.log(error));
	}, []);


	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const classes = useStyles();

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
							<List className={classes.list}>{topicListItemComponents}</List>
						</Paper>
						<CreateTopicButton />
					</DialogContentText>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default FollowedTopicsList;
