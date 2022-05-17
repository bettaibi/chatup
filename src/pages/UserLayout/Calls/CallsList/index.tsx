import React from 'react';
import {
    Box,
    Typography,
    Stack,
    Avatar
} from '@mui/material';
import Slide from '@mui/material/Slide';
import icomingIcon from '../../../../assets/img/icons/incoming.png';
import missingIcon from '../../../../assets/img/icons/missing.png';
import outgoingIcon from '../../../../assets/img/icons/outgoing.png';
import avatar from '../../../../assets/img/avatar.jpg';

const AllCalls = () => {

    return (
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                <Stack direction="column" spacing={2}>
            <Box className="b__radius shadow__sm" sx={{display: 'flex', flexDirection: 'row', padding:'1rem', gap: '1rem'}}>
                <Avatar src={avatar} />
                <Box flexGrow={1}>
                    <Typography variant="h6" color="error">Nidhal Bettaibi</Typography>
                    <Typography variant="body2" component="span">Missing Call</Typography>&nbsp;&bull;&nbsp; 
                    <Typography color="secondary" variant="body2" component="span">3 minutes 23 seconds</Typography>
                    <Typography color="secondary" variant="body2">yesterday, 12pm</Typography>
                </Box>
                <Avatar src={missingIcon} sx={{ width: 24, height: 24 }} />
            </Box>

            <Box className="b__radius shadow__sm"  sx={{display: 'flex', flexDirection: 'row', padding:'1rem', gap: '1rem'}}>
                <Avatar src={avatar} />
                <Box flexGrow={1}>
                    <Typography variant="h6">Nidhal Bettaibi</Typography>
                    <Typography variant="body2" component="span">Incoming Call</Typography>&nbsp;&bull;&nbsp; 
                    <Typography color="secondary" variant="body2" component="span">3 minutes 23 seconds</Typography>
                    <Typography color="secondary" variant="body2">yesterday, 12pm</Typography>
                </Box>
                <Avatar src={icomingIcon} sx={{ width: 24, height: 24 }} />
            </Box>

            <Box className="b__radius shadow__sm" sx={{display: 'flex', flexDirection: 'row', padding:'1rem', gap: '1rem'}}>
                <Avatar src={avatar} />
                <Box flexGrow={1}>
                    <Typography variant="h6">Nidhal Bettaibi</Typography>
                    <Typography variant="body2" component="span">Outgoing Call</Typography>&nbsp;&bull;&nbsp; 
                    <Typography color="secondary" variant="body2" component="span">3 minutes 23 seconds</Typography>
                    <Typography color="secondary" variant="body2">yesterday, 12pm</Typography>
                </Box>
                <Avatar src={outgoingIcon} sx={{ width: 24, height: 24 }} />
            </Box>
        </Stack>
       </Slide>
    )
}

export default AllCalls;