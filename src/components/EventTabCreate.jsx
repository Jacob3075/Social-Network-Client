import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, } from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import { fieldToTextField, TextFieldProps, } from 'formik-material-ui';
import { TimePicker, DatePicker, } from 'formik-material-ui-pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const EventTabCreate = () => {

    function UpperCasingTextField(props: TextFieldProps) {
        const {
            form: { setFieldValue },
            field: { name },
        } = props;

        return <MuiTextField {...fieldToTextField(props)} />;
    }
    const [image, setImage] = useState(null);

    const Changehandle = (event) => {
		if (event.target.files[0]) {
			setImage(event.target.files[0]);
		}
	};
    const handleUpload = () => {}
    function UploadFile() {
        return (
            <div>
                <Box margin={1}>
                    <input type='file' onChange={Changehandle} style={{ width: "35%" }} />
                    <Button onClick={handleUpload} color="default" variant="contained">
                        Upload
                    </Button>
                </Box>
            </div>
        )
    }
    const [name, setName] = React.useState('Composed TextField');
    const classes = useStyles();

    const handleChange = (event) => {
        setName(event.target.value);
    };


    return (
        <>
            <Formik
                initialValues={{
                    topic: '',
                    eventname: '',
                    venue: '',
                    date: new Date(),
                    time: new Date(),
                    description: '',
                }}
                validate={(values) => {
                    const errors: Partial<Values> = {};
                    if (!values.topic) {
                        errors.topic = ' ';
                    }
                    if (!values.eventname) {
                        errors.eventname = ' ';
                    }
                    if (!values.venue) {
                        errors.venue = ' ';
                    }
                    if (!values.time) {
                        errors.time = ' ';
                    }
                    if (!values.date) {
                        errors.date = ' ';
                    }
                    if (!values.description || !values.file) {
                        
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        alert(JSON.stringify(values, null, 2));
                    }, 500);
                }}
            >
                {({ submitForm, isSubmitting, touched, errors }) => (
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
                                    name="eventname"
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
                                Description:<br />
                                <label htmlFor="exampleFormControlTextarea1">
                                </label>
                                <textarea
                                    name="description"
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    style={{ width: "70%" }}
                                />
                            </Box>
                            <UploadFile />
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
                                    onClick={submitForm}
                                >
                                    Cancel
                                </Button>
                            </Box>
                        </Form>
                    </MuiPickersUtilsProvider>
                )}
            </Formik>


        </>
    )
};

export default EventTabCreate;