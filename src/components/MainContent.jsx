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

export default MainContent;

MainContent.propTypes = {
	// eventList: PropTypes.array.isRequired,
	// hasMoreItems: PropTypes.bool.isRequired,
	// loadMoreData: PropTypes.func.isRequired,
	// postList: PropTypes.array.isRequired,
};
