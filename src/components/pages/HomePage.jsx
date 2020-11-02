import React from "react";
import MyAppBar from "../MyAppBar";
import MainContent from "../MainContent";
import Post from "../Post";

const HomePage = () => {
	return (
		<>
			<MyAppBar />
			<MainContent />
			<Post/>
		</>
	);
};

export default HomePage;
