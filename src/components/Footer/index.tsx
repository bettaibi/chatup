import { Box } from '@mui/system';
import React from 'react'

const Footer = ({children}: {children: React.ReactNode}) => {
    return (
        <Box  className="spacing px" 
        sx={{height: '55px', display: 'flex', backgroundColor: '#f0fdf4', 
        alignItems:'center', justifyContent: 'flex-end'}}>
            {children}
        </Box>
    )
}

export default Footer;