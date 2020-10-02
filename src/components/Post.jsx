import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
	imageBg: {
		height: "100vh",
		backgroundImage: "url(https://source.unsplash.com/random)",
		backgroundRepeat: "no-repeat",
		backgroundColor:
			theme.palette.type === "light"
				? theme.palette.grey[50]
				: theme.palette.grey[900],
		backgroundSize: "cover",
		backgroundPosition: "center",
	},
	text: {
		color: "white",
		textDecoration: "line-through",
		backgroundColor: "red",
		padding: "1rem 2rem ",
	},
}));

const Post = () => {
	const classes = useStyles();

	return (
		<div className={classes.imageBg}>
			<CssBaseline />
			<span className={classes.text}>Hello</span>
		</div>
	);
};

export default Post;
