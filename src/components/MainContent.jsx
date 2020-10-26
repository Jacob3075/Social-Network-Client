import React from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LeftSideBar from "./LeftSideBar";
import MainFeed from "./MainFeed";
import RightSideBar from "./RightSideBar";

const useStyles = makeStyles(() => ({}));

function MainContent(props) {
	return (
		<Grid container spacing={2}>
			<Grid item xs={3}>
				<LeftSideBar />
			</Grid>
			<Grid item xs={6} align="center">
				<MainFeed />
			</Grid>
			<Grid item xs={3}>
				<RightSideBar />
			</Grid>
		</Grid>
	);
}

export default MainContent;
