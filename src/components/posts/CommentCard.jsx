import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { getUserById } from "../../services/UserService";

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
	description: {}
}));

const CommentCard = async ({ userId, comment }) => {
	const styles = useStyles();

	//TODO
	const userById = await getUserById(userId);

	return (
		<>
			<Paper className={styles.root} elevation={2}>
				<Typography variant="subtitle1">{userById}</Typography>
				<Grid container>
					<Grid item xs={6}>
						<Typography variant="body1">{comment}</Typography>
					</Grid>
				</Grid>
			</Paper>
		</>
	);
};

export default CommentCard;
