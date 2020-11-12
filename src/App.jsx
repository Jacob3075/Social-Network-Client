import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./styles/App.css";
import LoginPage from "./components/pages/LoginPage";
import SignInPage from "./components/pages/SignInPage";
import HomePage from "./components/pages/HomePage";
import TopicPage from "./components/pages/TopicPage";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const App = () => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	const theme = React.useMemo(
		() =>
			createMuiTheme({
				palette: {
					type: prefersDarkMode ? "dark" : "light",
				},
			}),
		[prefersDarkMode]
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<Route exact path="/" component={HomePage} />
				<Route path="/login" component={LoginPage} />
				<Route path="/sign-in" component={SignInPage} />
				<Route path="/home" component={HomePage} />
				<Route path="/topic/:topicId" component={TopicPage} />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
