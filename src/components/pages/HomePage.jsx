import React from "react";
import MyAppBar from "../MyAppBar";
import MainContent from "../MainContent";
let imageSource = "/public/logo.png";
const HomePage = () => {
	return (
		<>
			<MyAppBar title={<img src='https://github.com/Jacob3075/Social-Network-Client/blob/master/public/PESLink%20logo.png?raw=true' style={{width:200}}/>} />
			<MainContent />
		</>
	);
};

export default HomePage;
