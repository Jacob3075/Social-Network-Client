import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	button: {
		color: "white",
		marginLeft: "2em",
		marginTop: "0.5em",
	},
}));

const HomePageButton = () => {
	const classes = useStyles();

	const handleClickOpen = () => {
		console.log("Home button clicked");
	};

	return (
		<>
			<Button variant="text" className={classes.button} onClick={handleClickOpen}>
				Home
			</Button>
		</>
	);
};

export default HomePageButton;
