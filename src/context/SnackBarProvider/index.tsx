import React, {useContext} from 'react';
import { AlertColor } from '@mui/material';
import { Subject } from '../../services/Subject';

export interface SnackBarPayloadProps{
    msg: string;
    severity: AlertColor;
}

interface SnackBarProviderProps{
    showMsg: (msg: string, severity: AlertColor) => void;
    snackbarSubject: Subject<SnackBarPayloadProps>;
}

const SnackbarContext = React.createContext<SnackBarProviderProps>({} as SnackBarProviderProps);

const SnackBarProvider = ({children}: {children: React.ReactNode}) => {
    const snackbarSubject = new Subject<SnackBarPayloadProps>();

    function showMsg(msg: string, severity: AlertColor) {
        snackbarSubject.next({
            msg,
            severity
        });
    }

    const value = {
        showMsg,
        snackbarSubject
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

export {SnackBarProvider, useSnackbar };