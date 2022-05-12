import React, {useContext} from 'react';
import { AlertColor } from '@mui/material';
import { Subject } from '../../services/Subject';

enum SnackbarEvent{
    SNACKBAR_DISPATCHER = 'SNACKBAR_DISPATCHER'
}

export interface SnackBarPayloadProps{
    msg: string;
    severity: AlertColor;
}

interface SnackBarProviderProps{
    showMsg: (msg: string, severity: AlertColor) => void;
    subject: Subject<SnackBarPayloadProps>;
}

const SnackbarContext = React.createContext<SnackBarProviderProps>({} as SnackBarProviderProps);

const SnackBarProvider = ({children}: {children: React.ReactNode}) => {
    const subject = new Subject<SnackBarPayloadProps>();

    function showMsg(msg: string, severity: AlertColor) {
        subject.next(SnackbarEvent.SNACKBAR_DISPATCHER, {
            msg,
            severity
        });
    }

    const value = {
        showMsg,
        subject
    }
    return (
        <SnackbarContext.Provider value={value}>
            {children}
        </SnackbarContext.Provider>
    )
}

const useSnackbar = () => {
    const value = useContext(SnackbarContext);
    return value;
}

export {SnackBarProvider, useSnackbar, SnackbarEvent };