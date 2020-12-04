import { Checkbox, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { userService } from "../../services/UserService";
import { updateEventRegistrations } from "../../services/EventService";

const useStyles = makeStyles(() => ({
	root: {
		boxSizing: "border-box",
		padding: "0.5em",
		margin: "0.5em",
		textAlign: "left",
		borderRadius: 15,
	},
	content: {
		boxSizing: "border-box",
		padding: "0.8em",
	},
	title: {},
	place: {},
	time: {},
	description: {},
}));

const EventCard = ({ id, userId, topicId, time, name, description, location, registered }) => {
	const styles = useStyles();
	const [registeredEvent, setRegisteredEvent] = useState(
		userService.getRegisteredEvents().includes(id)
	);
	const [numberOfRegistrations, setNumberOfRegistrations] = useState(registered);

	const handleRegisterForEvent = () => {
		if (registeredEvent) setNumberOfRegistrations(numberOfRegistrations - 1);
		else setNumberOfRegistrations(numberOfRegistrations + 1);

		updateEventRegistrations(id, registeredEvent)
			.then((response) => setRegisteredEvent(!registeredEvent))
			.catch((error) => console.log(error));
	};

	return (
		<>
			<Paper className={styles.root} elevation={2}>
				<Typography variant="subtitle1">{name}</Typography>
				<Grid container>
					<Grid item className={styles.content} xs={6}>
						<Checkbox
							checked={registeredEvent}
							onChange={handleRegisterForEvent}
							color="primary"
							inputProps={{ "aria-label": "secondary checkbox" }}
						/>
						{numberOfRegistrations}
						<Typography variant="body2">When: {time}</Typography>
						<Typography variant="body2">Where: {location} </Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography variant="body1" fontSize="small">
							{description}
						</Typography>
					</Grid>
				</Grid>
			</Paper>
		</>
	);
};

export default EventCard;
