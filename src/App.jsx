import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import "./styles/App.css";
import logo from "./res/logo.svg";
import LoginPage from "./components/pages/LoginPage";
import SignInPage from "./components/pages/SignInPage";
import Post from "./components/Post";
import HomePage from "./components/pages/HomePage";
import TopicPage from "./components/pages/TopicPage";

const SampleApp = () => (
	<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Edit
				<code> src/App.js </code>
				and save to reload.
			</p>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
		</header>
	</div>
);

const App = () => (
	<>
		<CssBaseline />
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={SampleApp} />
				<Route path="/login" component={LoginPage} />
				<Route path="/sign-in" component={SignInPage} />
				<Route path="/post" component={Post} />
				<Route path="/home" component={HomePage} />
				{/*<Route path="/topics" component={TopicPage} />*/}
			</Switch>
		</BrowserRouter>
	</>
);

export default App;
