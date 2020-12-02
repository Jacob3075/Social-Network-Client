import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link, useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import signInPageStyles from "../../styles/SignInPageStyles";
import { userService } from "../../services/UserService";

const LoginPage = () => {
	const classes = signInPageStyles();
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	const handleLoginSubmit = async (event) => {
		event.preventDefault();
		userService
			.login(userName, password)
			.then((statusCode) => {
				if (statusCode === 200) {
					history.push("/");
				} else if (statusCode === 404) {
					alert("Login Failed, User not found");
					setUserName("");
					setPassword("");
				} else {
					alert("Login Failed, Code: " + statusCode);
					setUserName("");
					setPassword("");
				}
			})
			.catch((error) => console.error(error));
	};

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Log In
					</Typography>
					<form className={classes.form} onSubmit={handleLoginSubmit}>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="username"
							label="Username"
							name="username"
							autoComplete="username"
							autoFocus
							value={userName}
							onChange={(event) => setUserName(event.target.value)}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Log In
						</Button>
						<Grid container>
							<Grid item>
								<Link
									to="/sign-in"
									style={{ textDecoration: "none", color: "white" }}
								>
									{"Don't have an account? Sign Up!"}
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Grid>
		</Grid>
	);
};

export default LoginPage;
