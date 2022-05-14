import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import useDialog from '../../../hooks/useDialog';
import ForgetPasswordForm from './ForgetPasswordForm';

const ForgetPassword = () => {
    const { DialogComponent, handleClose, handleOpen } = useDialog();

    return (
        <React.Fragment>
            <Typography component="span" className="link"
                onClick={handleOpen}>Forget Password?</Typography>

            <DialogComponent>
                <Box py="1rem" px="1.5rem">
                    <Box mb={2}>
                        <img src="/chatup/img/58.png" alt="chatup_logo" />
                        <Typography variant="h5" sx={{ fontWeight: 600 }} gutterBottom>Forgot password?</Typography>

                        <Typography variant="subtitle1">
                            Fill the form to reset your password
                        </Typography>
                    </Box>

                    <ForgetPasswordForm handleClose={handleClose} />
                </Box>
            </DialogComponent>
        </React.Fragment>
    )
}

export default React.memo(ForgetPassword);