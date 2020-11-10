import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Paper, Typography } from "@material-ui/core";
import EventCard from "./EventCard";
import EventService from "../services/EventService";

const useStyles = makeStyles(() => ({
	container: {
		height: "75vh",
		marginLeft: "3em",
		marginRight: "3em",
		marginTop: "3em",
		borderRadius: 15,
		overflowY: "scroll",
	},
	header: {
		padding: "0.5em",
	},
}));

const RightSideBar = ({ userId }) => {
	const styles = useStyles();

	const events = EventService.mockGetEventsById(userId);

	const eventCards = events.map((event, index) => (
		<EventCard key={index} {...event} userId={userId}/>
	));

	return (
		<>
			<Paper className={styles.container} elevation={4}>
				<Typography className={styles.header} variant="h4">
					Events:
				</Typography>
				{eventCards}
			</Paper>
		</>
	);
};

export default RightSideBar;
