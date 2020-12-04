import PropTypes from "prop-types";
import React from "react";
import Grid from "@material-ui/core/Grid";
import EventsFeed from "./events/EventsFeed";
import PostsFeed from "./posts/PostsFeed";

const MainContent = ({ postList, hasMoreItems, loadMoreData }) => (
	<Grid container spacing={2} justify="center">
		<Grid item xs={8} align="center">
			<PostsFeed
				postList={postList}
				loadMoreData={loadMoreData}
				hasMoreItems={hasMoreItems}
			/>
		</Grid>
		<Grid item xs={4}>
			<EventsFeed />
		</Grid>
	</Grid>
);

export default MainContent;

MainContent.propTypes = {
	hasMoreItems: PropTypes.bool.isRequired,
	loadMoreData: PropTypes.func.isRequired,
	postList: PropTypes.array.isRequired,
};
