import React, {useContext} from 'react';
import { AlertColor } from '@mui/material';
import { 
    SubjectProviderProps, 
    SnackBarPayloadProps, 
    AsidePayloadProps 
} from '../../models/subjectContext.model';
import { Subject } from '../../services/Subject';

const SubjectContext = React.createContext<SubjectProviderProps>({} as SubjectProviderProps);

const SubjectProvider = ({children}: {children: React.ReactNode}) => {
    const snackbarSubject = new Subject<SnackBarPayloadProps>();
    const asideSubject = new Subject<AsidePayloadProps>();

    function showMsg(msg: string, severity: AlertColor) {
        snackbarSubject.next({
            msg,
            severity
        });
    }

    function toggleAside(Component?: React.ReactNode){
        if(Component){
            asideSubject.next({Component});
        }
        else{
            asideSubject.next();
        }
    }

    const value = {
        showMsg,
        snackbarSubject,
        toggleAside,
        asideSubject
    }
    return (
        <SubjectContext.Provider value={value}>
            {children}
        </SubjectContext.Provider>
    )
}

const useSnackbar = () => {
    const {snackbarSubject, showMsg} = useContext(SubjectContext);

    return {
        snackbarSubject,
        showMsg
    };
}

const useAside = () => {
    const {asideSubject, toggleAside} = useContext(SubjectContext);

    return {
        asideSubject,
        toggleAside
    };
}

export {SubjectProvider, useSnackbar, useAside };