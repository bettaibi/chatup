import { useState } from 'react';

const useToggle = (initial?: boolean) => {
    const [show, setShow] = useState<boolean>(initial || false);

    function handleOpen() {
        setShow(true);
    }

    function handleClose() {
        setShow(false);
    }

    function handleToggle() {
        setShow(prev => !prev);
    }

    return {
        show,
        handleOpen,
        handleClose,
        handleToggle
    };

};

export default useToggle;