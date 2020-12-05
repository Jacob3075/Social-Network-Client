import PropTypes from "prop-types";
import React from "react";
import Grid from "@material-ui/core/Grid";
import EventsFeed from "./events/EventsFeed";
import PostsFeed from "./posts/PostsFeed";

const MainContent = ({ loadPosts, loadEvents, reload, setReload }) => (
	<Grid container spacing={2} justify="center">
		<Grid item xs={8} align="center">
			<PostsFeed loadPosts={loadPosts} reload={reload} setReload={setReload} />
		</Grid>
		<Grid item xs={4}>
			<EventsFeed loadEvents={loadEvents} reload={reload} setReload={setReload} />
		</Grid>
	</Grid>
);

MainContent.propTypes = {
	loadEvents: PropTypes.func.isRequired,
	loadPosts: PropTypes.func.isRequired,
	reload: PropTypes.bool.isRequired,
	setReload: PropTypes.func.isRequired
};

export default MainContent;
