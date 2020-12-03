import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Box from "@material-ui/core/Box";
import UploadImage from "./UploadImage";
import MuiTextField from "@material-ui/core/TextField";
import { fieldToTextField } from "formik-material-ui";
import { createNewPost } from "../../services/PostService";
import { userService } from "../../services/UserService";
import { useHistory } from "react-router-dom";
import Post from "../../models/Post";

const UpperCasingTextField = (props) => {
	return <MuiTextField {...fieldToTextField(props)} />;
};

const CreatePostsTab = ({ handleClose, followedTopics }) => {
	const history = useHistory();
	const [image, setImage] = useState("");

	const getTopicIdByName = (topicName) => {
		return followedTopics.find((topic) => topic.topicName === topicName).id;
	};

	const submitForm = ({ topic, description }, { setSubmitting }) => {
		if (topic.length === 0 || description.length === 0 || image.length === 0) {
			setSubmitting(false);
		}

		setSubmitting(true);
		const topicId = getTopicIdByName(topic);

		createNewPost(
			new Post(null, userService.getUserId(), topicId, description, null, 0, [], image)
		)
			.then((response) => {
				setSubmitting(false);
				history.push(`/topic/${topicId}`);
				return response;
			})
			.catch((error) => console.log(error));
	};

	const formValidation = ({ description, file, topic }) => {
		const errors = {};
		if (!topic) {
			errors.topic = " ";
		}
		if (!(description || file)) {
			errors.description = " ";
		}
		return errors;
	};

	const handleFileSelect = (event) => {
		if (event.target.files[0]) {
			setImage(event.target.files[0]);
		}
	};

	const options = followedTopics.map((topic) => (
		<option key={topic.id}>{topic.topicName}</option>
	));

	return (
		<>
			<Formik
				initialValues={{
					topic: followedTopics[0].topicName,
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
									name="description"
									type="text"
									label="Description"
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

export default CreatePostsTab;
