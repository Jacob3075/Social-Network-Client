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

const EventCard = ({
	id,
	userId,
	topicId,
	time,
	name,
	description,
	location,
	registered,
	userName,
	topicName,
	setReload,
}) => {
	const styles = useStyles();
	const [registeredEvent, setRegisteredEvent] = useState(
		userService.getRegisteredEvents().includes(id)
	);
	const [numberOfRegistrations, setNumberOfRegistrations] = useState(registered);

	const handleRegisterForEvent = () => {
		if (registeredEvent) setNumberOfRegistrations(numberOfRegistrations - 1);
		else setNumberOfRegistrations(numberOfRegistrations + 1);

		updateEventRegistrations(id, registeredEvent)
			.then((response) => {
				setRegisteredEvent(!registeredEvent);
				setReload(true);
			})
			.catch((error) => console.log(error));
	};

	let hr = parseInt(time.substring(11,13)) + 5;
	let mi = parseInt(time.substring(14,16)) + 30;
	if(mi > 59) {
		mi = mi - 60;
		hr++;
	}
	if(hr > 23) hr -= 24;
	if(hr<10) hr = "0" + hr;
	if(mi < 10) mi = "0" + mi;
	
	let yr = time.substring(2,4);
	let mo = time.substring(5,7);
	let da = time.substring(8,10);

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
						<Typography variant="body2">Date: {da+"/"+mo+"/"+yr}</Typography>
						<Typography variant="body2">Time: {hr+":"+mi}</Typography>
						<Typography variant="body2">Place: {location} </Typography>
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
