import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	input1: {
		width: "80%",
		height: "56px",
		padding: "10px 10px 10px 10px",
		marginTop: "50px",
		marginBottom: "10px",
		marginLeft: "10%",
		marginRight: "10% ",
		borderRadius: "10px",
		border: "gray",
		backgroundColor: "lavender",
		position: "relative",
	},
	input2: {
		width: "30%",
		marginBottom: "2%",
		marginLeft: "33%",
		marginRight: "35%",
	},
	input3: {
		width: "25%",
		height: "40px",
		marginLeft: "35%",
		marginRight: "35% ",
		backgroundColor: "lavender",
		position: "relative",
	},
	input4: {
		width: "25%",
		height: "40px",
		marginLeft: "35%",
		marginRight: "35%",
		backgroundColor: "lavender",
		marginTop: "2%",
		marginBottom: "50px",
		position: "relative",
	},
}));

const ImageUpload = (props) => {
	const classes = useStyles();

	const [caption, setCaption] = useState("");
	const [image, setImage] = useState(null);
	const [url, setUrl] = useState("");
	const [progress, setProgress] = useState(0);

	const handleChange = (event) => {
		if (event.target.files[0]) {
			setImage(event.target.files[0]);
		}
	};
	const handleUpload = () => {};

	return (
		<>
			<input
				type="text"
				className={classes.input1}
				placeholder="Enter Caption"
				onChange={(event) => setCaption(event.target.value)}
			/>
			<br />
			<input
				type="file"
				onChange={handleChange}
				className={classes.input2}
			/>
			<Button onClick={handleUpload} className={classes.input3}>
				Upload
			</Button>
			<Button
				onClick={props.handleClose3}
				open={props.open3}
				className={classes.input4}
			>
				Cancel
			</Button>
		</>
	);
};

export default ImageUpload;
