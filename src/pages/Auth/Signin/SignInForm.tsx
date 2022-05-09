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

    const onHandleSubmit = (values: SignInModel, resetForm: ()=> void) => {
        console.log(values)
        resetForm();
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values, {resetForm})=> onHandleSubmit(values, resetForm)}
        >
            {
                ({ handleBlur, handleSubmit, handleChange, values, errors, touched }) => (
                    <Form onSubmit={handleSubmit}
                        noValidate
                        autoComplete='off'
                    >
                        <Box mb={1.8}>
                            <Typography variant='body1' sx={{ marginBottom: '0.3rem' }}>Email</Typography>
                            <TextField
                                fullWidth
                                hiddenLabel
                                id="email"
                                type="email"
                                placeholder="Please input your E-mail!"
                                name="email"
                                variant="standard"
                                size="small"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!errors.email && touched.email}
                            />
                            {touched.email && errors.email && <Typography variant='body2' sx={{ color: "error.main" }}>{errors.email}</Typography>}
                        </Box>
                        <Box mb={1.8}>
                            <Typography variant='body1' sx={{ marginBottom: '0.3rem' }}>Password</Typography>
                            <TextField
                                fullWidth
                                hiddenLabel
                                id="password"
                                type="password"
                                placeholder="Please input your password!"
                                name="password"
                                variant="standard"
                                size="small"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={!!errors.password && touched.password}
                            />
                            {touched.password && errors.password && <Typography variant='body2' sx={{ color: "error.main" }}>{errors.password}</Typography>}

                            <Box sx={{textAlign: 'right'}}>
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