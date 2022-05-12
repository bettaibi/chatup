import React, { useEffect, useCallback } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import useToggle from '../../hooks/useToggle';
import { useSnackbar, SnackBarPayloadProps } from '../../context/SnackBarProvider';
import { Subscription } from '../../services/Subject';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

let snackbarPalyload = {
    msg: '',
    severity: 'success'
} as SnackBarPayloadProps;

let subscription: Subscription | undefined;

const SnackbarComponent = () => {
    const { show, handleClose, handleOpen } = useToggle();
    const { snackbarSubject } = useSnackbar();

    useEffect(() => {
        subscribe();

        return () => {
            if (subscription) {
                subscription.unsubscribe();
                subscription = undefined;
            }
        }
    }, []);

    function subscribe() {
        try {
            if (subscription) return;
            subscription = snackbarSubject.subscribe(openSnackbar)
        }
        catch (err) {
            console.error(err);
        }
    }

    const openSnackbar = useCallback((obj) => {
        snackbarPalyload = { ...obj };
        handleOpen();
    }, [])

    return (
        <Snackbar
            open={show}
            autoHideDuration={4000}
            onClose={handleClose}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
            <Alert onClose={handleClose} severity={snackbarPalyload.severity} sx={{ width: '100%' }}>
                {snackbarPalyload.msg}
            </Alert>
        </Snackbar>
    )
};

export default React.memo(SnackbarComponent);