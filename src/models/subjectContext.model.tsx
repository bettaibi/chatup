import React from 'react';
import { AlertColor } from '@mui/material';
import { Subject } from '../services/Subject';

export interface SnackBarPayloadProps{
    msg: string;
    severity: AlertColor;
}

export interface AsidePayloadProps{
    Component?: React.ReactNode;
}

export interface SubjectProviderProps{
    showMsg: (msg: string, severity: AlertColor) => void;
    snackbarSubject: Subject<SnackBarPayloadProps>;
    asideSubject: Subject<AsidePayloadProps>;
    toggleAside: (Component?: React.ReactNode) => void;
}