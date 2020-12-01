import React, { useEffect } from "react";
import MyAppBar from "../MyAppBar";
import MainContent from "../MainContent";
import { userService } from "../../services/UserService";
import { useHistory } from "react-router-dom";

const HomePage = () => {
	const history = useHistory();

	useEffect(() => {
		if (!userService.isLoggedIn()) {
			console.log("REDIRECTED");
			history.push("/login");
		}
	}, []);

	return (
		<>
			<MyAppBar title="PESLink" />
			<MainContent />
		</>
	);
};

export default HomePage;
