import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CreatePostsTab from "./CreatePostsTab";
import CreateEventsTab from "./CreateEventsTab";
import TopicTabCreate from "./CreateTopicsTab";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: 500
	}
}));

const CreateButton = ({ followedTopics, setReload }) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const handleChangeIndex = (index) => {
		setValue(index);
	};

	const TabPanel = (props) => {
		const { children, value, index, ...other } = props;
		return (
			<div hidden={value !== index} id={`full-width-tabpanel-${index}`} {...other}>
				{value === index && (
					<Box p={3}>
						<Typography>{children}</Typography>
					</Box>
				)}
			</div>
		);
	};
	TabPanel.propTypes = {
		children: PropTypes.node,
		index: PropTypes.any.isRequired,
		value: PropTypes.any.isRequired
	};

	const a11yProps = (index) => ({
		id: `full-width-tab-${index}`
	});

	return (
		<>
			<Fab
				size="small"
				color="secondary"
				// className={classes.root}
				onClick={handleClickOpen}
				style={{ marginLeft: "10cm" }}
			>
				<AddIcon />
			</Fab>
			<Dialog
				onClose={handleClose}
				open={open}
				fullWidth={true}
				style={{ overflow: "hidden" }}
			>
				<div className={classes.root} style={{ width: "100%", padding: "0%" }}>
					<AppBar position="static" color="default" style={{ alignItems: "center" }}>
						<Tabs
							value={value}
							fullWidth
							onChange={handleChange}
							indicatorColor="primary"
							textColor="primary"
						>
							<Tab label="Post" {...a11yProps(0)} />
							<Tab label="Topic" {...a11yProps(1)} />
							<Tab label="Event" {...a11yProps(2)} />
						</Tabs>
					</AppBar>
					<SwipeableViews
						axis={theme.direction === "rtl" ? "x-reverse" : "x"}
						index={value}
						onChangeIndex={handleChangeIndex}
					>
						<TabPanel value={value} index={0} dir={theme.direction}>
							<CreatePostsTab
								handleClose={handleClose}
								followedTopics={followedTopics}
								setReload={setReload}
							/>
						</TabPanel>
						<TabPanel value={value} index={1} dir={theme.direction}>
							<TopicTabCreate handleClose={handleClose} setReload={setReload} />
						</TabPanel>
						<TabPanel value={value} index={2} dir={theme.direction}>
							<CreateEventsTab
								handleClose={handleClose}
								followedTopics={followedTopics}
								setReload={setReload}
							/>
						</TabPanel>
					</SwipeableViews>
				</div>
			</Dialog>
		</>
	);
};

CreateButton.propTypes = {
	followedTopics: PropTypes.array.isRequired,
	setReload: PropTypes.func.isRequired
};

export default CreateButton;
