import React from 'react';
import {
  Box,

} from '@mui/material';
import Navigations from './Navigations';
import useBreakpoint from '../../hooks/useBreakpoint';
import MobileSidebar from './MobileSidebar';

const Sidebar = () => {
  const { breakpoint } = useBreakpoint();
  const isMobile = breakpoint === "xs" || breakpoint === "sm";

  if (isMobile) {
    return (<MobileSidebar isMobile={isMobile} />);
  }
  return (
    <Box className="glass__blur b__radius" p={2} minWidth="80px" textAlign="center"
      sx={{ height: "calc(100vh - 2rem)", overflowY: 'auto' }}>
        <Navigations isMobile={isMobile} />
    </Box>
  )
}

export default Sidebar;