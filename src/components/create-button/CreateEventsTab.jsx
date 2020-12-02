import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import MuiTextField from "@material-ui/core/TextField";
import { fieldToTextField } from "formik-material-ui";
import { DatePicker, TimePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Box from "@material-ui/core/Box";
import UploadImage from "./UploadImage";

const UpperCasingTextField = (props) => {
	return <MuiTextField {...fieldToTextField(props)} />;
};

const CreateEventsTab = ({ handleClose }) => {
	const [image, setImage] = useState("");

	const handleFileSelect = (event) => {
		if (event.target.files[0]) {
			setImage(event.target.files[0]);
		}
	};

	const submitForm = (values, { setSubmitting }) => {
		setTimeout(() => {
			setSubmitting(false);
			alert(JSON.stringify(values, null, 2));
		}, 500);

		// let axios;
		// const formData = new FormData();
		// formData.append('image',image);
		// const config = {
		// 	headers: {
		// 		'content-type': 'multipart/form-data'
		// 	}
		// };
		// axios.post("/upload",formData,config)
		// 	.then((response) => {
		// 		alert("The file is successfully uploaded");
		// 	}).catch((error) => {
		// });
	};

	const formValidation = ({ date, description, eventName, file, time, topic, venue }) => {
		const errors = {};
		if (!topic) {
			errors.topic = "Required";
		}
		if (!eventName) {
			errors.eventName = "Required";
		}
		if (!venue) {
			errors.venue = "Required";
		}
		if (!time) {
			errors.time = "Required";
		}
		if (!date) {
			errors.date = "Required";
		}
		if (!description || !file) {
		}
		return errors;
	};

	return (
		<>
			<Formik
				initialValues={{
					topic: "",
					eventName: "",
					venue: "",
					date: "",
					time: "",
					description: "",
				}}
				validate={formValidation}
				onSubmit={submitForm}
			>
				{({ submitForm, isSubmitting }) => (
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<Form>
							<Box margin={1}>
								<Field
									component={UpperCasingTextField}
									name="topic"
									type="text"
									label="Topic"
								/>
							</Box>
							<Box margin={1}>
								<Field
									component={UpperCasingTextField}
									name="eventName"
									type="text"
									label="Event Name"
								/>
							</Box>
							<Box margin={1}>
								<Field
									component={UpperCasingTextField}
									name="venue"
									type="text"
									label="Event Venue"
								/>
							</Box>
							<Box margin={1}>
								<Field component={TimePicker} name="time" label="Time" />
							</Box>
							<Box margin={1}>
								<Field component={DatePicker} name="date" label="Date" />
							</Box>
							<Box margin={1}>
								Description:
								<br />
								<textarea
									name="description"
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									style={{ width: "70%" }}
								/>
							</Box>
							<UploadImage handleFileSelect={handleFileSelect} />
							{isSubmitting && <LinearProgress />}
							<Box margin={1}>
								<Button
									variant="contained"
									color="primary"
									disabled={isSubmitting}
									onClick={submitForm}
								>
									Submit
								</Button>
								&nbsp; &nbsp; &nbsp;
								<Button
									variant="contained"
									color="primary"
									disabled={isSubmitting}
									onClick={handleClose}
								>
									Cancel
								</Button>
							</Box>
						</Form>
					</MuiPickersUtilsProvider>
				)}
			</Formik>
		</>
	);
};

export default CreateEventsTab;