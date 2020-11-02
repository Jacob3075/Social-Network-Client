import React from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MainFeed from "./MainFeed";
import RightSideBar from "./RightSideBar";

const useStyles = makeStyles(() => ({}));

const MainContent = props => (
	<Grid container spacing={2}>
		<Grid item xs={8} align="center">
			<MainFeed />
		</Grid>
		<Grid item xs={4}>
			<RightSideBar />
		</Grid>
	</Grid>
);

export default MainContent;
