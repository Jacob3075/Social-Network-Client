import React from "react";
import MyAppBar from "../MyAppBar";
import MainContent from "../MainContent";
let imageSource = "/public/logo.png";
import { userService } from "../../services/UserService";
import { useHistory } from "react-router-dom";

const HomePage = () => {
	const history = useHistory();

	useEffect(() => {
		if (!userService.isLoggedIn()) history.push("/login");
	}, []);

	return (
		<>
			<MyAppBar title={<img src='https://github.com/Jacob3075/Social-Network-Client/blob/master/public/PESLink%20logo.png?raw=true' style={{width:200}}/>} />
			<MainContent />
		</>
	);
};

export default HomePage;
