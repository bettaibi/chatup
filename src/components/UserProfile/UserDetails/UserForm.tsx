import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
    Box,
    Typography,
    Button,
    Grid
} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

import {
    PhoneOutlined,
    MapsHomeWorkOutlined,
    LocationCityOutlined,
    PublicOutlined,
    DescriptionOutlined,
    AccountCircle,
} from '@mui/icons-material';
import InputField from '../../InputField';
import Footer from '../../Footer';

const initialValues = {
    username: '',
    phone: '',
    city: '',
    country: '',
    address: '',
    bio: ''
}

const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    phone: yup.string().required('Phone is required').min(8, 'Phone must have 8 digits').max(8, 'Phone must have 8 digits')
});

const UserForm = () => {
    const {
        handleBlur,
        handleChange,
        handleSubmit,
        errors,
        touched,
        values
    } = useFormik({
        validationSchema: schema,
        initialValues,
        onSubmit: (values) => {
            console.log(values)
        }
    });

    function onhandleSubmit(values: any) {
        console.log("submited")
    }

    return (
        <form onSubmit={handleSubmit} autoComplete='off'>
            <Box className="spacing px" pt="1.2rem">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <InputField placeholder="Please input your Username!" id="username"
                            fullWidth
                            type="text"
                            name="username"
                            label="Username*"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!errors.username && touched.username}
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                        />

                        {touched.username && errors.username && <Typography variant='body2' sx={{ color: "error.main" }}>{errors.username}</Typography>}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputField placeholder="Please input your phone!" id="phone"
                            fullWidth
                            type="phone"
                            name="phone"
                            label="Phone*"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={!!errors.phone && touched.phone}
                            startAdornment={
                                <InputAdornment position="start">
                                    <PhoneOutlined />
                                </InputAdornment>
                            }
                        />

                        {touched.phone && errors.phone && <Typography variant='body2' sx={{ color: "error.main" }}>{errors.phone}</Typography>}
                    </Grid>
                </Grid>

                <Box my="1.2rem">
                    <InputField placeholder="Please input your address!" id="address"
                        fullWidth
                        type="text"
                        name="address"
                        label="Address"
                        value={values.address}
                        onChange={handleChange}
                        startAdornment={
                            <InputAdornment position="start">
                                <MapsHomeWorkOutlined />
                            </InputAdornment>
                        }
                    />
                </Box>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <InputField placeholder="Please input your city!" id="city"
                            fullWidth
                            type="text"
                            name="city"
                            label="City"
                            value={values.city}
                            onChange={handleChange}
                            startAdornment={<InputAdornment position="start">
                                <LocationCityOutlined />
                            </InputAdornment>}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputField placeholder="Please input your country!" id="country"
                            fullWidth
                            type="text"
                            name="country"
                            label="Country"
                            value={values.country}
                            onChange={handleChange}
                            startAdornment={
                                <InputAdornment position="start">
                                    <PublicOutlined />
                                </InputAdornment>
                            }
                        />
                    </Grid>
                </Grid>

                <Box mt="1.2rem" mb="2rem">
                    <InputField placeholder="Please input your bio!" id="bio"
                        fullWidth
                        type="text"
                        name="bio"
                        label="Bio"
                        value={values.bio}
                        multiline
                        rows={4}
                        onChange={handleChange}
                        startAdornment={
                            <InputAdornment position="start" sx={{alignSelf:'flex-start', marginTop:'.7rem'}}>
                                <DescriptionOutlined />
                            </InputAdornment>
                        }
                    />
                </Box>
            </Box>

            <Footer>
                <Button size="small" variant="rounded" type="submit" color="primary">Save Changes</Button>
            </Footer>
        </form>
    )
}

export default UserForm;