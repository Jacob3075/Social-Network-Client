import { makeStyles } from "@material-ui/core/styles";

// https://source.unsplash.com/random Social-Network-Client\public\PESLink logo.png
const signInPageStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
	},
	image: {
		backgroundImage: "url(https://github.com/Jacob3075/Social-Network-Client/blob/master/public/PESLink%20logo.png?raw=true)",
		backgroundRepeat: "no-repeat",
		backgroundColor: "#f3efcc",
		backgroundSize: "750px",
		backgroundPosition: "center",
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default signInPageStyles;
