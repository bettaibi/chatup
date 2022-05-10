import React from 'react';
import {
    Box,
    Typography,
    Divider,
    Stack,
    Button,
} from '@mui/material';
import OverrideStepper from '../../../components/OverrideStepper';
import { Formik, Form } from "formik";
import * as yup from 'yup';
import InputField from '../../../components/InputField';

const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
};

const schema = yup.object().shape({
    email: yup.string().email('Invalid Email').required('Email Field is required'),
    username: yup.string().required('Username is required'),
    phone: yup.string().required('Phone Number is required').min(8, 'Phone Number must have 8 digits')
        .max(8, 'Phone Number must have 8 digits'),
    password: yup.string().required('Password Field is required').min(6, 'Password Field must have 6 letters'),
    confirmPassword: yup.string().required('Password Field is required').min(6, 'Password Field must have 6 letters')
        .oneOf([yup.ref('password')], "Password not match")
});

const SignupForm = () => {

    function handleOnSubmit(values: any) {
        console.log(values)
    }

    return (
        <React.Fragment>
            <Formik initialValues={initialValues} validationSchema={schema}
                onSubmit={(values) => handleOnSubmit(values)}>

                {
                    ({ handleSubmit, handleChange, handleBlur, errors, touched, values, isValid }) => (
                        <Form onSubmit={handleSubmit} noValidate autoComplete='off'>
                            <OverrideStepper
                                labels="User details,Password,Done"
                                actionsButtons = {
                                    (handleNext, handleBack, activeStep, steps)=> (
                                        <Box pt={2} sx={{display: 'flex', alignItems: 'center', justifyContent:"space-between"}}>
                                        <Button type="button" onClick={handleBack} disabled={activeStep === 0} size="small">Previous step</Button>
                        
                                        {
                                            activeStep < (steps - 1) ?
                                                <Button type="button" onClick={handleNext} color="primary" variant="rounded" size="small"
                                                >Next step</Button> :
                                                <Button type="submit" color="primary" variant="rounded" size="small"
                                                disabled={!isValid}>Submit</Button>
                                        }
                                    </Box>
                                    )
                                }
                            >

                                {/* Step 1 */}
                                <React.Fragment>
                                    <Box my={1.8}>
                                        <InputField placeholder="Please input your Username!" id="username"
                                            fullWidth
                                            type="text"
                                            name="username"
                                            value={values.username}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={!!errors.username && touched.username} hiddenLabel
                                        />

                                        {touched.username && errors.username && <Typography variant='body2' sx={{ color: "error.main" }}>{errors.username}</Typography>}
                                    </Box>

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

                                    <Box>
                                        <InputField placeholder="Please input your phone number!" id="phone"
                                            fullWidth
                                            type="phone"
                                            name="phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={!!errors.phone && touched.phone} hiddenLabel
                                        />

                                        {touched.phone && errors.phone && <Typography variant='body2' sx={{ color: "error.main" }}>{errors.phone}</Typography>}
                                    </Box>
                                </React.Fragment>

                                {/* Step 2 */}
                                <React.Fragment>
                                    <Box my={1.8}>
                                        <InputField placeholder="Please input your password!" id="password"
                                            fullWidth
                                            type="password"
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={!!errors.password && touched.password} hiddenLabel
                                        />

                                        {touched.password && errors.password && <Typography variant='body2' sx={{ color: "error.main" }}>{errors.password}</Typography>}
                                    </Box>

                                    <Box>
                                        <InputField placeholder="Please cpnfirm your password" id="confirmPassword"
                                            fullWidth
                                            type="password"
                                            name="confirmPassword"
                                            value={values.confirmPassword}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={!!errors.confirmPassword && touched.confirmPassword} hiddenLabel
                                        />

                                        {touched.confirmPassword && errors.confirmPassword && <Typography variant='body2' sx={{ color: "error.main" }}>{errors.confirmPassword}</Typography>}
                                    </Box>
                                </React.Fragment>

                                {/* Step 3 */}
                                <React.Fragment>
                                    {
                                    isValid ? <Typography component='p' variant='body1'>
                                        You have done! please submit your profile.
                                    </Typography>:
                                    <Typography component='p' variant='body1' sx={{color: "error.main" }}>
                                        Something went wrong! please check your details.
                                     </Typography>
                                    }
                                </React.Fragment>
                            </OverrideStepper>
                        </Form>
                    )
                }

            </Formik>



        </React.Fragment>
    )
}

export default SignupForm;