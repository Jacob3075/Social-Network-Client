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
import HomePageButton from "./HomePageButton";
import CreateButton from "./CreateButton";
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
		<AppBar className={classes.appBar} position="sticky" color="inherit">
			<Toolbar>
				<Typography variant="h5">{title}</Typography>
				<form onSubmit={handleSubmit} className={classes.form}>
					<TextField
						className={classes.search}
						size="small"
						id="outlined-basic"
						label="Search"
						variant="outlined"
						style={{ marginLeft: "5cm" }}
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
				<CreateButton />
				<HomePageButton />
				<TopicFollowList userId={userId} />
				<Button
					variant="text"
					style={{ color: "white", marginLeft: "2em", marginTop: "0.5em" }}
				>
					SignOut
				</Button>
				{/*<SignOutButton />*/}
			</Toolbar>
		</AppBar>
	);
};

export default MyAppBar;

MyAppBar.propTypes = {
	title: PropTypes.string.isRequired,
};
