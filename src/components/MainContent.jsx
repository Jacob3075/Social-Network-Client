import React from "react";
import Grid from "@material-ui/core/Grid";
// import makeStyles from "@material-ui/core/styles/makeStyles";
import MainFeed from "./MainFeed";
import RightSideBar from "./RightSideBar";

// const useStyles = makeStyles(() => ({}));

const MainContent = ({ userId }) => (
	<Grid container spacing={2} justify="center">
		<Grid item xs={8} align="center">
			<MainFeed userId={userId} />
		</Grid>
		<Grid item xs={4}>
			<RightSideBar userId={userId} />
		</Grid>
	</Grid>
);

export default MainContent;
