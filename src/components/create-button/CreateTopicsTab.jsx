import PropTypes from "prop-types";
import React from "react";
import { Field, Form, Formik } from "formik";
import { Button } from "@material-ui/core";
import MuiTextField from "@material-ui/core/TextField";
import { fieldToTextField } from "formik-material-ui";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import { userService } from "../../services/UserService";
import { createNewTopic } from "../../services/TopicService";
import Topic from "../../models/Topic";

const UpperCasingTextField = (props) => {
	return <MuiTextField {...fieldToTextField(props)} />;
};

const CreateTopicsTab = ({ handleClose, setReload }) => {
	const history = useHistory();

	const handleFormSubmit = ({ topicName, description }, { setSubmitting }) => {
		if (topicName.length === 0 || description.length === 0) {
			setSubmitting(false);
			return;
		}

		setSubmitting(true);

		createNewTopic(new Topic(null, topicName, userService.getUserId(), description))
			.then((response) => {
				setSubmitting(false);
				if (response instanceof Topic) {
					setReload(true);
					return history.push(`/topic/${response.id}`);
				}
				if (response === 409) {
					alert("Topic already exists");
				} else if (response === 500) {
					alert("ERROR");
				}
				return response;
			})
			.catch((error) => console.log(error));
	};

	const formValidation = ({ description, topicName }) => {
		const errors = {};
		if (!topicName) {
			errors.topicName = " ";
		}
		if (!description) {
			errors.description = " ";
		}
		return errors;
	};

	return (
		<>
			<Formik
				initialValues={{
					topicName: "",
					description: "",
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
									name="topicName"
									type="text"
									label="Topic"
								/>
							</Box>
							<Box margin={1}>
								Bio:
								<br />
								<Field
									type="textarea"
									name="description"
									rows="2"
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

CreateTopicsTab.propTypes = {
	handleClose: PropTypes.func.isRequired,
	setReload: PropTypes.func.isRequired
};

export default CreateTopicsTab;
