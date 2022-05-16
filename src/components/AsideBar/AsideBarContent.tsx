import React from 'react';
import {
    Box
} from '@mui/material';

const AsideBarContent = ({children}: {children: React.ReactNode}) => {

    return (
        <Box className="scrolled">
           {children}
        </Box>
    )
}

export default AsideBarContent;