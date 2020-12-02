import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

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
	description: {},
}));

const CommentCard = ({
	name = "name",
	description = "description",
}) => {
	const styles = useStyles();

	return (
		<>
			<Paper className={styles.root} elevation={2}>
				<Typography variant="subtitle1">{name}</Typography>
				<Grid container>
					<Grid item xs={6}>
						<Typography variant="body1">{description}</Typography>
					</Grid>
				</Grid>
			</Paper>
		</>
	);
};

export default CommentCard;
