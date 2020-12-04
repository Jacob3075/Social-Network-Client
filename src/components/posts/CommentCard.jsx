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

const CommentCard = ({ userId, comment, userName }) => {
	const styles = useStyles();
	// const [userName, setUserName] = useState("");

	// getUserById(userId)
	// 	.then((response) => setUserName(response.userName))
	// 	.catch((error) => console.log(error));

	return (
		<>
			<Paper className={styles.root} elevation={2}>
				<Typography variant="subtitle1">{userName}</Typography>
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
