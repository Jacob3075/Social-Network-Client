import React, { useState } from "react";
import PropTypes from "prop-types";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import TopicFollowList from "./TopicFollowList";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	appBar: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	form: {
		marginRight: "2em",
		width: "30%",
	},
	search: {
		width: "100%",
	},
}));

const MyAppBar = ({ title = "Title", userId }) => {
	const classes = useStyles();

	const [searchQuery, setSearchQuery] = useState("");

	const handleChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(searchQuery);
		setSearchQuery("");
	};

	return (
		<AppBar className={classes.appBar} position="sticky">
			<Toolbar>
				<Typography variant="h5">{title}</Typography>
			</Toolbar>
			<Button>
				<TopicFollowList userId={userId} />
			</Button>
			<form onSubmit={handleSubmit} className={classes.form}>
				<TextField
					className={classes.search}
					size="small"
					id="outlined-basic"
					label="Search"
					variant="outlined"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						),
					}}
					value={searchQuery}
					onChange={handleChange}
				/>
			</form>
		</AppBar>
	);
};

export default MyAppBar;

MyAppBar.propTypes = {
	title: PropTypes.string.isRequired,
};
