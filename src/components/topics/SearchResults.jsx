import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import TopicsListItem from "./TopicsListItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import Fuse from "fuse.js";


const useStyles = makeStyles((theme) => ({
	text: {
		padding: theme.spacing(2, 2, 0)
	},
	paper: {
		paddingBottom: 5
	},
	list: {
		marginBottom: theme.spacing(2),
		height: "50vh",
		overflowY: "scroll"
	},
	button: {
		color: "white",
		marginLeft: "2em",
		marginTop: "0.5em"
	}
}));


const SearchResults = ({ setReload, reload, topics }) => {
	const classes = useStyles();

	const [searchQuery, setSearchQuery] = useState("");
	const [open, setOpen] = useState(false);

	const fuse = new Fuse(topics, {
		keys: ["topicName"]
	});
	const results = fuse.search(searchQuery);

	const topicResults = searchQuery ?
		results.map(({ item }) => (
			<TopicsListItem key={item.id} {...(item)} setReload={setReload} />
		)) :
		topics.map((topic) => (
			<TopicsListItem key={topic.id} {...topic} setReload={setReload} />
		));

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChange = ({ currentTarget = {} }) => {
		const { value } = currentTarget;
		setSearchQuery(value);
	};

	return (
		<>
			<Button variant="text" className={classes.button} onClick={handleClickOpen}>
				Search
			</Button>
			<Dialog open={open} fullWidth={true} onClose={handleClose}>
				<DialogContent>
					<DialogContentText>
						<Paper square className={classes.paper}>
							<form className={classes.form}>
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
										)
									}}
									value={searchQuery}
									onChange={handleChange}
								/>
							</form>
							<Typography className={classes.text} variant="h5" gutterBottom>
								Results
							</Typography>
							<List className={classes.list}>{topicResults}</List>
						</Paper>
					</DialogContentText>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default SearchResults;


