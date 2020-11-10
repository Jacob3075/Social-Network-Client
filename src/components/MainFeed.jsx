import React from "react";
// import makeStyles from "@material-ui/core/styles/makeStyles";
import InfiniteScrollList from "./samples/InfiniteScrollList";

// const useStyles = makeStyles(() => {});

const MainFeed = ({ userId }) => (
	<>
		<InfiniteScrollList userId={userId} />
	</>
);

export default MainFeed;
