import { useCallback, forwardRef } from "react";
import useToggle from "./useToggle";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@mui/material';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import { TransitionProps } from '@mui/material/transitions';

const SlideTransition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const FadeTransition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Fade in ref={ref} {...props} />;
});

const useDialog = () => {
    const { show, handleClose, handleOpen } = useToggle();

    const DialogComponent = useCallback(({ children, ActionButton, size, fullWidth = false, fullScreen = false, dividers = false, title }) => (
        <Dialog
            onClose={handleClose}
            open={show}
            maxWidth={size}
            fullScreen={fullScreen}
            TransitionComponent={fullScreen ? SlideTransition : FadeTransition}
            fullWidth={fullWidth}
        >
            {title && <DialogTitle>
                {title}
            </DialogTitle>}

            <DialogContent dividers={dividers}>
                {children}
            </DialogContent>

            {ActionButton && <DialogActions>
                {ActionButton}
            </DialogActions>}
        </Dialog>
    ), [show]);


    return {
        handleClose,
        handleOpen,
        DialogComponent
    };

};

export default useDialog;