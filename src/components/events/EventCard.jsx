import PropTypes from "prop-types";
import { Checkbox, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { userService } from "../../services/UserService";
import { updateEventRegistrations } from "../../services/EventService";
import { useHistory } from "react-router-dom";
import { parseTimeString } from "../../Utils";

const useStyles = makeStyles(() => ({
	root: {
		boxSizing: "border-box",
		padding: "0.5em",
		margin: "0.5em",
		textAlign: "left",
		borderRadius: 15
	},
	content: {
		boxSizing: "border-box",
		padding: "0.8em"
	},
	title: {},
	place: {},
	time: {},
	description: {}
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
	                   setReload
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

	const history = useHistory();
	const goToTopicPage = () => {
		history.push(`/topic/${topicId}`);
	};

	const { day, hour, minute, month, year } = parseTimeString(time);
	return (
		<>
			<Paper className={styles.root} elevation={4}>
				<Typography variant="subtitle1">{name}</Typography>
				<Grid container>
					<Grid item className={styles.content} xs={6}>
						<Checkbox
							checked={registeredEvent}
							onChange={handleRegisterForEvent}
							color="primary"
						/>
						{numberOfRegistrations}
						<Typography variant="body2">
							Date: {`${day}/${month}/${year}`}
						</Typography>
						<Typography variant="body2">
							Time: {`${hour}:${minute}`}
						</Typography>
						<Typography variant="body2">
							Place: {location}
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography variant="body1" fontSize="small" onClick={goToTopicPage}>
							{description}
						</Typography>
					</Grid>
				</Grid>
			</Paper>
		</>
	);
};

EventCard.propTypes = {
	description: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	registered: PropTypes.number.isRequired,
	setReload: PropTypes.func.isRequired,
	time: PropTypes.string.isRequired,
	topicId: PropTypes.string.isRequired,
	topicName: PropTypes.any,
	userId: PropTypes.any,
	userName: PropTypes.any
};

export default EventCard;
