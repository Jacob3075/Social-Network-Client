import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import LoginPage from "./components/pages/LoginPage";
import SignUpPage from "./components/pages/SignUpPage";
import HomePage from "./components/pages/HomePage";
import TopicPage from "./components/pages/TopicPage";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const App = () => {
	const theme = createMuiTheme({ palette: { type: "dark" } });

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<Route exact path="/" component={HomePage} />
				<Route path="/login" component={LoginPage} />
				<Route path="/sign-in" component={SignUpPage} />
				<Route path="/topic/:topicId" component={TopicPage} />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
