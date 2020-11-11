import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./styles/App.css";
import LoginPage from "./components/pages/LoginPage";
import SignInPage from "./components/pages/SignInPage";
import HomePage from "./components/pages/HomePage";
import TopicPage from "./components/pages/TopicPage";

const App = () => (
	<>
		<CssBaseline />
		<BrowserRouter>
			<Route exact path="/" component={HomePage} />
			<Route path="/login" component={LoginPage} />
			<Route path="/sign-in" component={SignInPage} />
			<Route path="/home" component={HomePage} />
			<Route path="/topic/:topicId" component={TopicPage} />
		</BrowserRouter>
	</>
);

export default App;
