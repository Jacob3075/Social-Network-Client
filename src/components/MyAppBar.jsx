import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import FollowedTopicsList from "./topics/FollowedTopicsList";
import HomePageButton from "./HomePageButton";
import CreateButton from "./create-button/CreateButton";
import { Button } from "@material-ui/core";
import { userService } from "../services/UserService";
import { useHistory } from "react-router-dom";
import { getAllTopics, getTopicFollowedByUser } from "../services/TopicService";
import Fuse from 'fuse.js';

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
		width: "120%",
	},
}));

const MyAppBar = ({ title = "Title", setReload, reload }) => {
	const classes = useStyles();
	const history = useHistory();

	const [searchQuery, setSearchQuery] = useState("");
	const [topics, setTopics] = useState([]);
	const [followedTopics, setFollowedTopics] = useState([]);
	const fuse = new Fuse(topics, {
		keys: ['getAllTopics'],
	})
	const results = fuse.search('searchQuery');
	const topicResults = results.map(result => result.item);
	

	useEffect(() => {
		getAllTopics()
			.then((response) => setTopics(response))
			.catch((error) => console.error(error));

		getTopicFollowedByUser()
			.then((response) => setFollowedTopics(response))
			.catch((error) => console.error(error));
	}, [reload]);

	function handleChange({ currentTarget = {}}) {
		const {value} = currentTarget;
		setSearchQuery(value);

	}

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(searchQuery);
		setSearchQuery("");
	};

	const handleLogOut = () => {
		userService.logout();

		history.push("/login");
	};

	return (
		<AppBar className={classes.appBar} position="sticky" color="inherit">
			<img
				src="https://github.com/Jacob3075/Social-Network-Client/blob/master/public/PESLinklogo.png?raw=true"
				style={{ width: 200, marginLeft: 10}}
				alt="PESLink"
			/>
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
				<CreateButton followedTopics={followedTopics} setReload={setReload} />
				<HomePageButton />
				<FollowedTopicsList followedTopics={followedTopics} setReload={setReload} reload={reload}/>
				<Button
					variant="text"
					onClick={handleLogOut}
					style={{ color: "white", marginLeft: "2em", marginTop: "0.5em" }}
				>
					SignOut
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default MyAppBar;

MyAppBar.propTypes = {
	title: PropTypes.string.isRequired
};
