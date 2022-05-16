import { Box } from '@mui/system';
import React from 'react'

const Footer = ({children}: {children: React.ReactNode}) => {
    return (
        <Box  className="spacing px border__top" 
        sx={{height: '55px', display: 'flex', backgroundColor: 'primary.light', 
        alignItems:'center', justifyContent: 'flex-end'}}>
            {children}
        </Box>
    )
}

export default Footer;