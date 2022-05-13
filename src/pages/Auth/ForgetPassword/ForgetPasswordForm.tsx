import React from 'react';
import * as yup from "yup";
import { useFormik, Form } from 'formik';
import {Box, Typography, Button} from '@mui/material';
import InputField from '../../../components/InputField';

const initialValues = {
    email: ''
}

const schema = yup.object().shape({
    email: yup.string().email('Please enter a valid email address').required('Email address is required')
});

const ForgetPasswordForm = ({handleClose}: {handleClose: () => void}) => {
    const {
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        touched
    } = useFormik({
        initialValues,
        validationSchema: schema,
        onSubmit: (values) => {
            console.log(values)
        }
    });

    return (
        <Form onSubmit={handleSubmit}>
            <Box mb={1.8}>
                <InputField placeholder="Please input your E-mail!" id="email"
                    fullWidth
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.email && touched.email}
                />

                {touched.email && errors.email && <Typography variant='body2' sx={{ color: "error.main" }}>{errors.email}</Typography>}
            </Box>
            <Box sx={{textAlign: 'right'}} pt={1}>
                <Button onClick={handleClose}>Close</Button>
                <Button type="submit" variant="rounded">Send reset link</Button>
            </Box>
        </Form>
    )
}

export default ForgetPasswordForm;