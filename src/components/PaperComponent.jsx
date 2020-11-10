import Draggable from "react-draggable";
import Paper from "@material-ui/core/Paper";
import React from "react";

const PaperComponent = props => (
	<Draggable
		handle="#draggable-dialog-title"
		cancel={'[class*="MuiDialogContent-root"]'}
	>
		<Paper {...props} />
	</Draggable>
);

export default PaperComponent;
