import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form, Field } from 'formik';
import { Button, } from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import { fieldToTextField, TextFieldProps, } from 'formik-material-ui';
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

const PostTabCreate = () => {

    function UpperCasingTextField(props: TextFieldProps) {
        const {
            form: { setFieldValue },
            field: { name },
        } = props;

        return <MuiTextField {...fieldToTextField(props)} />;
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
                    bio: '',
                }}
                validate={(values) => {
                    const errors: Partial<Values> = {};
                    if (!values.topic) {
                        errors.topic = ' ';
                    }
                    if (!values.bio) {
                        errors.bio = ' ';
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
                                Bio:<br />
                                <label htmlFor="exampleFormControlTextarea1">
                                </label>
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

export default PostTabCreate;