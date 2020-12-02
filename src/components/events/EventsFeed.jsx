import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { List, Paper, Typography } from "@material-ui/core";
import EventCard from "./EventCard";
import EventService from "../../services/EventService";

const useStyles = makeStyles((theme) => ({
	container: {
		position: "fixed",
		height: "75vh",
		width: "55vh",
		marginLeft: "3em",
		marginRight: "3em",
		marginTop: "3em",
		borderRadius: 15,
	},
	header: {
		padding: "0.5em",
	},
	list: {
		marginBottom: theme.spacing(2),
		height: "60vh",
		overflowY: "scroll",
	},
}));

const EventsFeed = ({ userId }) => {
	const styles = useStyles();

	const events = EventService.mockGetEventsById(userId);

	const eventCards = events.map((event, index) => (
		<EventCard key={index} {...event} userId={userId} />
	));

	return (
		<>
			<Paper className={styles.container} elevation={4}>
				<Typography className={styles.header} variant="h4">
					Events:
				</Typography>
				<List className={styles.list}>{eventCards}</List>
			</Paper>
		</>
	);
};

export default EventsFeed;