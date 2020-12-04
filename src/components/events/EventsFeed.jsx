import React, { useEffect, useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { List, Paper, Typography } from "@material-ui/core";
import EventCard from "./EventCard";

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

const EventsFeed = ({ loadEvents, reload, setReload }) => {
	const styles = useStyles();
	const [eventCards, setEventCards] = useState([]);

	useEffect(() => {
		loadEvents()
			.then((events) =>
				events.map((event) => <EventCard key={event.id} {...event} setReload={setReload} />)
			)
			.then((response) => {
				setEventCards(response);
				setReload(false);
			})
			.catch((error) => console.log(error));
	}, [reload]);

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

EventsFeed.propTypes = {
	// eventList: PropTypes.array.isRequired,
};
