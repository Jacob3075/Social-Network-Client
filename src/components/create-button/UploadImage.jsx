import Box from "@material-ui/core/Box";
import React from "react";

const UploadImage = ({ handleFileSelect }) => (
	<Box margin={1}>
		<input type="file" onChange={handleFileSelect} style={{ width: "35%" }} />
	</Box>
);

export default UploadImage;
