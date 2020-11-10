import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const postStyles = makeStyles((theme) => ({
	root: {
		maxWidth: "55vw",
		textAlign: "left",
		marginTop: "3em",
		marginBottom: "3em",
		borderRadius: 15,
	},
	postHeader: {
		fontSize: "5",
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
	avatar: {
		backgroundColor: red[500],
	},
	textField: {
		paddingLeft: "1em",
		paddingBottom: "1em",
	},
}));

export default postStyles;
