import React from "react";
// import makeStyles from "@material-ui/core/styles/makeStyles";
import PostsFeed from "./PostsFeed";

// const useStyles = makeStyles(() => {});

const MainFeed = ({ userId }) => (
	<>
		<PostsFeed userId={userId} />
	</>
);

export default MainFeed;
