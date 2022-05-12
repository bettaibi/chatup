import React, { useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import useToggle from '../../hooks/useToggle';
import { useSnackbar, SnackbarEvent, SnackBarPayloadProps } from '../../context/SnackBarProvider';

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

let isSubscribed = false;

const SnackbarComponent = () => {
    const { show, handleClose, handleOpen } = useToggle();
    const { subject } = useSnackbar();

    useEffect(() => {
        subscribe();

        return () => {
            subject.unsubscribe(SnackbarEvent.SNACKBAR_DISPATCHER);
            isSubscribed = false;
        }
    }, []);

    function subscribe() {
        try {
            if (isSubscribed) return;
            isSubscribed = true;
            subject.subscribe(SnackbarEvent.SNACKBAR_DISPATCHER, (obj) => {
                if (obj) {
                    snackbarPalyload = { ...obj };
                    handleOpen();
                }
            });
        }
        catch (err) {
            console.error(err);
        }
    }

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