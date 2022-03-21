import React from 'react';
import { Drawer, Space, Button } from 'antd';
import useToggle from '../../../hooks/useToggle';
import Cropper from "react-cropper";

import "cropperjs/dist/cropper.css";

const ProfileAvatar = () => {
    const fileRef = React.useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = React.useState<string>();

    function clickHandler() {
        if (fileRef.current)
            fileRef.current.click();
    }

    function changeHandler(e: any) {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setSelectedFile(reader.result as any);
        };
        reader.readAsDataURL(files[0]);
    }

    return (
        <React.Fragment>
            <input type="file" name="myfile" hidden ref={fileRef} onChange={changeHandler}
                accept="image/jpeg" />
            <div className="profile__avatar" onClick={clickHandler}>
                <img src="/chatup/img/avatar.jpg" alt="profile_avatar" />
            </div>
            <CropperModal file={selectedFile} />
        </React.Fragment>
    )
}

const CropperModal = ({ file }: { file: any }) => {
    const { show, handleClose, handleOpen } = useToggle();

    React.useEffect(() => {
        if (file) {
            handleOpen();
        }
    }, [file]);

    function handleOk() {
        console.log("clicked")
    }

    return (
        <Drawer
            placement="right"
            visible={show}
            closable={false}
            onClose={handleClose}
            getContainer={false}
            style={{ position: 'absolute' }}
            destroyOnClose={true}
            mask={false}
            maskClosable={false}
        >
            <div className="d__flex align__item_center p__16" style={{ justifyContent: 'flex-end' }}>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleOk} type="primary">
                    Save
                </Button>
            </div>
            <CropComponent file={file} />
        </Drawer>
    )
};

const CropComponent = ({ file }: { file: string }) => {
    const cropperRef = React.useRef<HTMLImageElement>(null);

    const onCrop = () => {
        const imageElement: any = cropperRef?.current;
        const cropper: any = imageElement?.cropper;
        // console.log(cropper.getCroppedCanvas().toDataURL());
    };

    return (
        <Cropper
            style={{ position: 'absolute', top: '0', left: 0, height: '100%', width: '100%' }}
            aspectRatio={4 / 3}
            preview=".img-preview"
            guides={false}
            src={file}
            crop={onCrop}
            ref={cropperRef}
            viewMode={1}
            dragMode="move"
            cropBoxMovable={false}
        />
    )
}

export default ProfileAvatar;