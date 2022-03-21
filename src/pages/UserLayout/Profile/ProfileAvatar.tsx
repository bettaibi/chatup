import React from 'react';
import { Drawer, Button } from 'antd';
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
            bodyStyle={{padding: 0, overflowY: 'hidden'}}
            destroyOnClose={true}
            mask={false}
            maskClosable={false}
        >
            <div className="d__flex flex__column h__100">
                <div className="p__16" 
                style={{ position: 'absolute', right: '1rem', backgroundColor: 'transparent', zIndex: 999999}}>
                    <Button onClick={handleClose} size="small" shape="round" style={{marginRight: '0.5rem'}}>Cancel</Button>
                    <Button onClick={handleOk} shape="round" type='primary' size="small">
                        Save
                    </Button>
                </div>
                <div style={{ position: 'relative', flex: 1, width: '100%'}}>
                    <CropComponent file={file} />
                </div>
            </div>
           
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
            style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
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