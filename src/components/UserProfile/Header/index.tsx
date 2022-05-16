import React from 'react';
import {
    Box,
    Avatar,
    Typography,
    IconButton,
    Divider
} from '@mui/material';
import { CameraAltOutlined, DeleteOutline } from '@mui/icons-material';
import cover from "../../../assets/img/cover.jpg";
import avatar from "../../../assets/img/avatar.jpg";
import AvatarCropper from './AvatarCropper';

const Header = ({ actionsBtn, isEdited = false }: { actionsBtn?: React.ReactNode, isEdited?: boolean }) => {
    return (
        <React.Fragment>
            <Box className="bg__cover" sx={{ backgroundImage: `url(${cover})` }} />
            <Box className="spacing px">
                <Box sx={{
                    display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
                    marginTop: '-64px'
                }}>
                    {/* AVATAR */}
                    {
                        isEdited ? <EditedAvatar /> : <Avatar
                            alt="user_avatar"
                            src={avatar}
                            sx={{ width: '128px', height: '128px', border: '4px solid #fff' }}
                        />
                    }
                    
                    <Box sx={{ alignSelf: 'end' }}>
                        {actionsBtn}
                    </Box>
                </Box>
                <Typography variant="h5" sx={{ marginTop: '0.8rem', marginBottom: '1.2rem' }}>
                    Nidhal Bettaibi
                </Typography>
                <Divider />
            </Box>
        </React.Fragment>
    )
}

const EditedAvatar = () => {

    return (
        <Box sx={{
            width: '128px', height: '128px', border: '4px solid #fff',
            overflow: 'hidden', borderRadius: '50%', position: 'relative'
        }}>
            <Avatar
                alt="avatar_to_edit"
                src={avatar}
                sx={{ width: '100%', height: '100%' }}
            />
            <Box sx={{
                position: 'absolute', width: '100%', height: '100%',
                top: 0, left: 0, backgroundColor: 'rgba(0,0,0,.5)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <AvatarCropper />
                
                <IconButton aria-label="delete" sx={{ color: '#fff' }}>
                    <DeleteOutline />
                </IconButton>
            </Box>
        </Box>
    )
}

export default React.memo(Header);