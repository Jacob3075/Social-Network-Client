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

const useStyles = makeStyles((theme) => ({
	text: {
		padding: theme.spacing(2, 2, 0),
	},
	paper: {
		paddingBottom: 50,
	},
	list: {
		marginBottom: theme.spacing(2),
	},
}));

const TopicFollowList = () => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const messages = [
		{
			id: 1,
			primary: "Matt Steffanina",
		},
		{
			id: 2,
			primary: "Erika Klein",
		},
		{
			id: 3,
			primary: "Sportsssssss",
		},
		{
			id: 4,
			primary: "CookCook",
			person: "/static/images/avatar/2.jpg",
		},
	];

	const classes = useStyles();

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
								<Typography
									className={classes.text}
									variant="h5"
									gutterBottom
								>
									Topics
								</Typography>
								<List className={classes.list}>
									{messages.map(({ id, primary }) => (
										<TopicsListItem
											key={id}
											primary={primary}
										/>
									))}
								</List>
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
