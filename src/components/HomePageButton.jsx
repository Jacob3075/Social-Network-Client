import React from "react";
import { useHistory } from "react-router-dom";
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
	const history = useHistory();

	const handleClickOpen = () => {
		history.push("/");
	};

	return (
		<>
			<Button variant="text" className={classes.button} onClick={handleClickOpen}>
				Home
			</Button>
		</>
	);
};

HomePageButton.propTypes = {};

export default HomePageButton;
