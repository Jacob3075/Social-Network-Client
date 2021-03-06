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

const SignUpPage = () => {
	const classes = signInPageStyles();
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const history = useHistory();

	const handleSignUpSubmit = (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("Password mismatch");
			setConfirmPassword("");
			return;
		}

		userService.signUp(userName, password)
			.then(responseStatus => {
				if (responseStatus === 201) {
					history.push("/login");
				} else if (responseStatus === 409) {
					alert("User already exists");
					history.push("/login");
				} else {
					alert("Sign Up failed");
				}
			})
			.catch((error) => console.log(error));
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
						Sign Up
					</Typography>
					<form className={classes.form} onSubmit={handleSignUpSubmit}>
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
							autoComplete="password"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="confirm-password"
							label="Confirm Password"
							type="password"
							id="confirm-password"
							autoComplete="confirm-password"
							value={confirmPassword}
							onChange={(event) => setConfirmPassword(event.target.value)}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Sign Up
						</Button>
						<Link to={"/login"} style={{ textDecoration: "none", color: "white" }}>
							Already have an account? Log in!
						</Link>
					</form>
				</div>
			</Grid>
		</Grid>
	);
};

SignUpPage.propTypes = {};

export default SignUpPage;
