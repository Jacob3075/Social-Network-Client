import React from "react";
import { Field, Form, Formik } from "formik";
import { Button } from "@material-ui/core";
import MuiTextField from "@material-ui/core/TextField";
import { fieldToTextField } from "formik-material-ui";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Box from "@material-ui/core/Box";

const UpperCasingTextField = (props) => {
	return <MuiTextField {...fieldToTextField(props)} />;
};

const CreateTopicsTab = ({ handleClose }) => {
	const handleFormSubmit = (values, { setSubmitting }) => {
		setTimeout(() => {
			setSubmitting(false);
			alert(JSON.stringify(values, null, 2));
		}, 500);
	};

	const formValidation = ({ bio, topic }) => {
		const errors = {};
		if (!topic) {
			errors.topic = " ";
		}
		if (!bio) {
			errors.bio = " ";
		}
		return errors;
	};

	return (
		<>
			<Formik
				initialValues={{
					topic: "",
					bio: "",
				}}
				validate={formValidation}
				onSubmit={handleFormSubmit}
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
								Bio:
								<br />
								<textarea
									name="bio"
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									style={{ width: "70%" }}
								/>
							</Box>
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

export default CreateTopicsTab;
