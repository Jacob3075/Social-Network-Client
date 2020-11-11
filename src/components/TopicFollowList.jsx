import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import PaperComponent from "./PaperComponent";
import CreateTopicButton from "./CreateTopicButton";
import TopicsListItem from "./TopicsListItem";
import TopicService from "../services/TopicService";

const useStyles = makeStyles((theme) => ({
	text: {
		padding: theme.spacing(2, 2, 0),
	},
	paper: {
		paddingBottom: 50,
	},
	list: {
		marginBottom: theme.spacing(2),
		height: "50vh",
		overflowY: "scroll",
	},
}));

const TopicFollowList = ({ userId }) => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const classes = useStyles();

	const topicList = TopicService.mockGetTopics(userId);

	const topicListItemComponents = topicList.map((topic, index) => (
		<TopicsListItem key={topic.id} {...topic} />
	));
	return (
		<>
			<Button
				variant="contained"
				color="primary"
				style={{ float: "right", width: "3.7cm" }}
				onClick={handleClickOpen}
			>
				Topics
			</Button>
			<Dialog
				open={open}
				fullWidth={true}
				onClose={handleClose}
				PaperComponent={PaperComponent}
			>
				<DialogContent>
					<DialogContentText>
						<>
							<Paper square className={classes.paper}>
								<Typography className={classes.text} variant="h5" gutterBottom>
									Topics
								</Typography>
								<List className={classes.list}>{topicListItemComponents}</List>
							</Paper>
							<CreateTopicButton />
						</>
					</DialogContentText>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default TopicFollowList;
