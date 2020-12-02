import React from "react";
import Grid from "@material-ui/core/Grid";
import EventsFeed from "./events/EventsFeed";
import PostsFeed from "./posts/PostsFeed";

const MainContent = ({ userId }) => (
	<Grid container spacing={2} justify="center">
		<Grid item xs={8} align="center">
			<PostsFeed userId={userId} />
		</Grid>
		<Grid item xs={4}>
			<EventsFeed userId={userId} />
		</Grid>
	</Grid>
);

export default MainContent;
