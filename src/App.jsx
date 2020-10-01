import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./styles/App.css";
import logo from "./res/logo.svg";
import LoginPage from "./components/LoginPage";
import SignInSide from "./components/samples/SignInSide";

const SampleApp = () => (
	<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo"/>
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
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={SampleApp}/>
			<Route path="/login" component={LoginPage}/>
			<Route path="/sign-in" component={SignInSide}/>
		</Switch>
	</BrowserRouter>
);

export default App;
