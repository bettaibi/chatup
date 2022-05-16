import React from 'react';
import {
    Box
} from '@mui/material';

const PageHeader = ({children}: {children: React.ReactNode}) => {

    return (
        <Box className="border__bottom spacing px" 
        sx={{height: '55px', display: 'flex', flexDirection: 'row', alignItems: 'center', 
        position: 'sticky', top:0, backgroundColor: '#fff', zIndex: 10}}>
            {children}
        </Box>
    )
}

export default PageHeader;