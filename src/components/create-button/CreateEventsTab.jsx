import React from "react";
import { Field, Form, Formik } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import MuiTextField from "@material-ui/core/TextField";
import { fieldToTextField } from "formik-material-ui";
import { DateTimePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import Event from "../../models/Event";
import { userService } from "../../services/UserService";
import { createNewEvent } from "../../services/EventService";

const UpperCasingTextField = (props) => {
	return <MuiTextField {...fieldToTextField(props)} />;
};

const CreateEventsTab = ({ handleClose, followedTopics }) => {
	const history = useHistory();

	const getTopicIdByName = (topicName) => {
		return followedTopics.find((topic) => topic.topicName === topicName).id;
	};

	const submitForm = ({ topic, name, description, location, time }, { setSubmitting }) => {
		//Thu Dec 03 2020 22:14:08 GMT+0530 (India Standard Time)
		// console.log(topic);
		// console.log(name);
		// console.log(description);
		// console.log(location);
		// console.log(time);
		// setSubmitting(false);

		if (topic.length === 0 || description.length === 0) {
			setSubmitting(false);
			return;
		}

		setSubmitting(true);
		const topicId = getTopicIdByName(topic);

		createNewEvent(
			new Event(null, userService.getUserId(), topicId, time, name, description, location, 0)
		)
			.then((response) => {
				setSubmitting(false);
				history.push(`/topic/${topicId}`);
				return response;
			})
			.catch((error) => console.log(error));
	};

	const formValidation = ({ topic, name, description, location, time }) => {
		const errors = {};
		if (!topic) {
			errors.topic = "Required";
		}
		if (!name) {
			errors.name = "Required";
		}
		if (!location) {
			errors.location = "Required";
		}
		if (!time) {
			errors.time = "Required";
		}
		if (!description) {
			errors.description = "Required";
		}
		return errors;
	};

	const options = followedTopics.map((topic) => (
		<option key={topic.id}>{topic.topicName}</option>
	));

	return (
		<>
			<Formik
				initialValues={{
					topic: followedTopics[0].topicName,
					name: "",
					location: "",
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
								<Field name="topic" as="select" label="Topic">
									{options}
								</Field>
							</Box>
							<Box margin={1}>
								<Field
									component={UpperCasingTextField}
									name="name"
									type="text"
									label="Event Name"
								/>
							</Box>
							<Box margin={1}>
								<Field
									component={UpperCasingTextField}
									name="location"
									type="text"
									label="Event Venue"
								/>
							</Box>
							<Box margin={1}>
								<Field component={DateTimePicker} name="time" label="Time" />
							</Box>
							<Box margin={1}>
								Description:
								<br />
								<Field
									type="textarea"
									name="description"
									rows="2"
									style={{ width: "70%" }}
								/>
							</Box>
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
