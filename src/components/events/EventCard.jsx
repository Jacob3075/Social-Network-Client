import { colors, Grid, makeStyles, Paper, Typography, Checkbox } from "@material-ui/core";
import React from "react";

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

const EventCard = ({ id, userId, topicId, time, name, description, location, registered, image }) => {
	const styles = useStyles();

	return (
		<>
			<Paper className={styles.root} elevation={2}>
				<Typography variant="subtitle1">{name}</Typography>
				<Grid container>
					<Grid item className={styles.content} xs={6}>
						<Checkbox
							color="primary"
							inputProps={{ 'aria-label': 'secondary checkbox' }}
						/>
						<Typography variant="body2">Time: {time}</Typography>
						<Typography variant="body2">Place: {location} </Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography variant="body1" fontSize="small">{description}</Typography>
					</Grid>
				</Grid>
			</Paper>
		</>
	);
};

export default EventCard;
