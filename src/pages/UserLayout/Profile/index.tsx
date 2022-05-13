import React from 'react';
import {
    Box,
    Button,
    Typography
} from '@mui/material';
import {
    EditOutlined
} from "@mui/icons-material";
import { Header, UserDetails } from '../../../components/UserProfile';

const Profile = () => {
    const [isEdited, setIsEdited] = React.useState(false);

    function handleChange(){
        setIsEdited(prev => !prev);
    }

    return (
        <Box>
            <Header isEdited={isEdited} actionsBtn={
                (
                    <Button variant="rounded" color="secondary" onClick={handleChange}
                        sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: '0.8rem' }}>
                        <EditOutlined color="secondary" />
                        <Typography color="secondary" component="span">
                            {isEdited?'Cancel': 'Edit'}
                        </Typography>
                    </Button>
                )
            } />
            <UserDetails isEdited={isEdited} />
        </Box>
    )
}

export default Profile;