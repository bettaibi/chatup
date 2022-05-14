import React from 'react';
import { Box } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import Cropper from "react-cropper";
import throttle from 'lodash.throttle';

import "cropperjs/dist/cropper.css";

interface ImageCropperProps{
    url: string | ArrayBuffer | null | undefined;
    croppedCallback?: (croppedImage: string) => void;
}

const ImageCropper: React.FC<ImageCropperProps> = ({ url, croppedCallback }) => {
    const cropperRef = React.useRef<HTMLImageElement>(null);
    const [croppedImage, setCroppedImage] = React.useState<string>(url?.toString() || '');

    const onCrop = () => {
        const imageElement: any = cropperRef?.current;
        const cropper: any = imageElement?.cropper;
        let img = cropper.getCroppedCanvas().toDataURL();
        if(croppedCallback){
            throttleCallback(img)
        }
        setCroppedImage(img)
    };

    const throttleCallback = throttle(function (img){
        croppedCallback!(img)
    }, 300);

    if (!url) {
        return null;
    }
    return (
        <Box sx={{position: 'relative', height: '100%', width: '100%'}}>
            <Cropper
                style={{ height: '100%', width: '100%' }}
                aspectRatio={4 / 3}
                preview=".img-preview"
                guides={false}
                src={url.toString()}
                crop={onCrop}
                ref={cropperRef}
                viewMode={1}
                dragMode="move"
                cropBoxMovable={false}
            />
            <Avatar src={croppedImage}
            sx={{width: '100px', height: '100px', position: 'absolute', top: "1rem", left: "1rem", objectFit:'cover'}} />
        </Box>
    )
}

export default ImageCropper;