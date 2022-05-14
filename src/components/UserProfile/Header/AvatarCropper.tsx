import React, { useRef, useCallback } from 'react';
import {
    IconButton,
    Stack,
    Button
} from '@mui/material';
import useDialog from '../../../hooks/useDialog';
import { CameraAltOutlined } from '@mui/icons-material';
import ImageCropper from '../../ImageCropper';
import useBreakpoint from '../../../hooks/useBreakpoint';

let file: string | ArrayBuffer | null;
const AvatarCropper = () => {
    const {breakpoint} = useBreakpoint();
    const { handleOpen, handleClose, DialogComponent } = useDialog();
    const fileRef = useRef<HTMLInputElement>(null);
    const isMobile = breakpoint === 'xs' || breakpoint === 'sm';

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        try {
            e.preventDefault();
            let files = e.target.files;

            if (!files?.[0]) return;
            const reader = new FileReader();
            reader.onload = () => {
                file = reader.result;
                handleOpen();
            };
            reader.readAsDataURL(files[0]);
        }
        catch (err) {
            console.log(err);
        }
    }

    function browseFile() {
        fileRef.current?.click()
    }

    const croppedCallback = useCallback((croppedImg) => {
        console.log("received cropped");
    }, []);

    const ActionButton = (
        <Stack direction="row" spacing={1}>
            <Button variant='rounded' color="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant='rounded'>Save</Button>
        </Stack>
    );

    return (
        <React.Fragment>
            <input type="file" hidden ref={fileRef} onChange={handleFileChange}
                accept="image/jpeg" name="avatar" />

            <IconButton aria-label="delete" sx={{ color: '#fff' }} onClick={browseFile}>
                <CameraAltOutlined />
            </IconButton>

            <DialogComponent
                title = "Customize your pic"
                dividers
                ActionButton = {ActionButton}
                fullScreen = {isMobile}>
                    <ImageCropper url={file} croppedCallback = {croppedCallback} />
            </DialogComponent>
        </React.Fragment>
    )
}

export default AvatarCropper;