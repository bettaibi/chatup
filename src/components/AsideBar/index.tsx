import React, { useCallback, useEffect } from 'react';
import {
    Box,
} from '@mui/material';
import { useAside } from '../../context/SubjectProvider';
import { AsidePayloadProps } from '../../models/subjectContext.model';
import { Subscription } from '../../services/Subject';
import { motion, AnimatePresence } from "framer-motion";
import AsideBarContent from './AsideBarContent';
import useToggle from '../../hooks/useToggle';

let subscription: Subscription | undefined;
let content: React.ReactNode = null;

const asideVariant = {
    hidden: {  x: '110%'},
    visible: { x: '0px', flexGrow: 1, flexBasis: '290px', flexShrink: 0},
    exit: {  x: '110%', flexGrow: 0, flexBasis: 0, flexShrink: 0}
};

const AsideBar: React.FC = () => {
    const { asideSubject } = useAside();
    const { show, handleOpen, handleClose } = useToggle();

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
            subscription = asideSubject.subscribe(onSubscribe);
        }
        catch (err) {
            console.error(err);
        }
    }

    const onSubscribe = useCallback((payload?: AsidePayloadProps) => {
        if (payload) {
            content = (
                <React.Fragment>{payload.Component}</React.Fragment>
            );
            handleOpen();
        }
        else {   
            handleClose();
        }
    }, []);

    return (
        <AnimatePresence>
            {show &&
                <Box component={motion.aside} className="aside__bar" sx={{ borderRadius: { sm: '18px' }, position: { sm: 'static', xs: 'fixed' }, transform: {TranslateX: '110%'} }}
                    top={0} left={0} width="100%" height="100%" zIndex={101} key="aside" flexBasis={290}
                    variants={asideVariant}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ type: "spring", bounce: 0, duration: .8}}
                >

                    <AsideBarContent>
                        {content}
                    </AsideBarContent>
                </Box>
            }
        </AnimatePresence>
    )
}

export default AsideBar;