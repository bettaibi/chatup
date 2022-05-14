import React from 'react'
import {
    Box,
    Typography,
} from '@mui/material';
import {
    EmailOutlined,
    PhoneOutlined,
    MapsHomeWorkOutlined,
    LocationCityOutlined,
    PublicOutlined,
    DescriptionOutlined
} from '@mui/icons-material';
import UserForm from './UserForm';

const UserDetails = ({isEdited}: {isEdited: boolean}) => {

    return (
        <>
           { isEdited ? <UserForm /> :<Details />}
        </>
    )
}

const Details = () => {

    return(
        <Box className="spacing px" pt="1.2rem" data-testid="userDetailsContainer">
            <Box sx={{display: 'flex', flexDirection:'row', marginBottom: '1rem', 
            alignItems: 'center', gap:'1.2rem'}}>
                <EmailOutlined color="secondary" sx={{alignSelf: 'flex-start'}} />
                <Typography component="a" href={`mailto:${'bettaibinidhal00@gmail.com'}`}
                sx={{color: '#6366F1', fontSize: '14px', '&:hover':{textDecoration:'underline'}}}>
                    bettaibinidhal00@gmail.com
                </Typography>
                <Typography component="span" color = "secondary" sx={{fontSize: '14px'}}>
                 &#8226; Personal
                </Typography>
            </Box>

            <Box sx={{display: 'flex', flexDirection:'row', marginBottom: '1.2rem', 
            alignItems: 'center', gap:'1.2rem'}}>
                <PhoneOutlined color="secondary" />
                <Typography component="span" sx={{fontSize: '14px'}} color = "secondary">
                    +216 55362523
                </Typography>
                <Typography component="span" color = "secondary" sx={{fontSize: '14px'}}>
                 &#8226; Mobile
                </Typography>
            </Box>

            <Box sx={{display: 'flex', flexDirection:'row', marginBottom: '1.2rem', 
            alignItems: 'center', gap:'1.2rem'}}>
                <MapsHomeWorkOutlined color="secondary" />
                <Typography component="span" sx={{fontSize: '14px'}} color = "secondary">
                    Enour City, Kasserine, 1200
                </Typography>
            </Box>

            <Box sx={{display: 'flex', flexDirection:'row', marginBottom: '1.2rem', 
            alignItems: 'center', gap:'1.2rem'}}>
                <LocationCityOutlined color="secondary" />
                <Typography component="span" sx={{fontSize: '14px'}} color = "secondary">
                    Kasserine City
                </Typography>
            </Box>

            <Box sx={{display: 'flex', flexDirection:'row', marginBottom: '1.2rem', 
            alignItems: 'center', gap:'1.2rem'}}>
                <PublicOutlined color="secondary" />
                <Typography component="span" sx={{fontSize: '14px'}} color = "secondary">
                    Tunisia
                </Typography>
            </Box>

            <Box sx={{display: 'flex', flexDirection:'row', marginBottom: '1.2rem', 
            alignItems: 'center', gap:'1.2rem'}}>
                <DescriptionOutlined color="secondary"  sx={{alignSelf: 'flex-start'}}  />
                <Typography component="p" sx={{fontSize: '14px', maxWidth: '800px'}} color = "secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, fugit. Nihil vitae delectus fuga repellendus tempore rem perferendis aut temporibus voluptatum!
                     Quidem, alias maxime? Tempore praesentium dicta quis dignissimos hic.
                </Typography>
            </Box>

        </Box>
    )
};

export default UserDetails