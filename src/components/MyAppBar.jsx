import React, { useState } from "react";
import PropTypes from "prop-types";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
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
		width: "30%",	//search box width
	},
	search: {
		width: "100%",
	},
}));

const MyAppBar = ({ title = "Title" }) => {
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

	const ITEM_HEIGHT = 48;
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar className={classes.appBar} position="sticky">
			<Toolbar>
				<Typography variant="h5">{title}</Typography>
			</Toolbar>
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
			<IconButton
				aria-label="more"
				aria-controls="long-menu"
				aria-haspopup="true"
				onClick={handleClick}
			>
				<MoreVertIcon />
			</IconButton>
			<Menu
				id="long-menu"
				anchorEl={anchorEl}
				keepMounted
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						maxHeight: ITEM_HEIGHT * 4.5,
						width: '20ch',
					},
				}}
			>
				<MenuItem onClick={handleClose}>
					<Button variant="contained" color="primary" style={{ float: 'right', width: '4cm' }} onClick={handleClose}>
                		Home
            		</Button>
				</MenuItem>
  				<MenuItem onClick={handleClose}>
				  	<Button variant="contained" color="primary" style={{ float: 'right', width: '4cm' }} onClick={handleClose}>
                		Profile
            		</Button>
				</MenuItem>				
  				<MenuItem onClick={handleClose}>
					<TopicFollowList />
				</MenuItem>
  				<MenuItem onClick={handleClose}>
				  	<Button variant="contained" color="primary" style={{ float: 'right', width: '4cm' }} onClick={handleClose}>
                		Sign Out
            		</Button>
				</MenuItem>
			</Menu>
		</AppBar>
	);
};

export default MyAppBar;

MyAppBar.propTypes = {
	title: PropTypes.string.isRequired,
};
