import React from 'react';
import { PersonAddAlt } from '@mui/icons-material'
import { Box, Button, Typography, Tooltip } from '@mui/material'
import { Header, UserDetails } from '../../../../../components/UserProfile'

const Details = () => {
    return (
        <Box>
            <Header actionsBtn={
                (
                    <Button variant="rounded" color="secondary"
                        sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: '0.5rem' }}>
                        <PersonAddAlt color="secondary" />
                        <Tooltip title="Send Friend Request">
                            <Typography component="span" fontSize="14px">
                                Add
                            </Typography>
                        </Tooltip>
                    </Button>
                )
            } />
            <UserDetails />
        </Box>
    )
}

export default Details;