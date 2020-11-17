import React from "react";
import { Button } from "@material-ui/core";

const SubmitButton = () => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button
				autoFocus
				onClick={handleClose}
				color="default"
				style={{ marginLeft: "13.5cm", marginBottom: "0.4cm" }}
			>
				Attend
			</Button>
			<Button
				autoFocus
				onClick={handleClose}
				color="default"
				style={{ marginLeft: "13.5cm", marginBottom: "0.4cm" }}
			>
				Cancel
			</Button>
		</>
	);
};

export default SubmitButton;
