import React from 'react';

import {
    Box,
    TextField,
    Typography,
    Button
} from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from '../../../components/InputField';

interface SignInModel {
    email: string;
    password: string;
}
const initialValues: SignInModel = {
    email: '',
    password: '',
};

const schema = Yup.object().shape({
    email: Yup.string().email('Invalid Email!').required('Email field is required'),
    password: Yup.string().min(6, 'Password must has more than 6 digits').required('Password field is required')
});


const SignInForm = () => {

    const onHandleSubmit = (values: SignInModel, resetForm: () => void) => {
        console.log(values)
        resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values, { resetForm }) => onHandleSubmit(values, resetForm)}
        >
            {
                ({ handleBlur, handleSubmit, handleChange, values, errors, touched }) => (
                    <Form onSubmit={handleSubmit}
                        noValidate
                        autoComplete='off'
                    >
                        <Box mb={1.8}>
                            <InputField placeholder="Please input your E-mail!" id="email"
                                fullWidth
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!errors.email && touched.email} hiddenLabel
                            />

                            {touched.email && errors.email && <Typography variant='body2' sx={{ color: "error.main" }}>{errors.email}</Typography>}
                        </Box>
                        <Box mb={1.8}>
                            <InputField label="Password" placeholder="Please input your password!" id="password"
                                fullWidth
                                type="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!errors.password && touched.password}
                            />
                            {touched.password && errors.password && <Typography variant='body2' sx={{ color: "error.main" }}>{errors.password}</Typography>}

                            <Box sx={{ textAlign: 'right' }}>
                                <Typography component="span" className="link">Forget Password?</Typography>
                            </Box>
                        </Box>

                        <Button variant="rounded" color="primary" type="submit" fullWidth>Sign in</Button>

                    </Form>
                )
            }
        </Formik>
    )
}

export default SignInForm