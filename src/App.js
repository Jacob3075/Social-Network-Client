import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginPage from "./components/LoginPage";

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={SampleApp}/>
			<Route path="/login" component={LoginPage}/>
			<Route/>
		</Switch>
	</BrowserRouter>
);

const SampleApp = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo"/>
				<p>
					Edit <code>src/App.js</code> and save to reload.
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
}

export default App;
