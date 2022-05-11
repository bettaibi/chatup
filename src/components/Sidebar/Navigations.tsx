import React from 'react';
import { navigation } from '../../models/navigation.model';
import {
    Box,
    Typography
} from '@mui/material';
import { useParams, useNavigate} from 'react-router-dom';
import { LogoutOutlined } from '@mui/icons-material';
import { motion } from "framer-motion";

const Navigations = ({ isMobile, closeHandler}: { isMobile: boolean, closeHandler?: ()=> void}) => {
    const { '*': location } = useParams();
    const navigate = useNavigate();

    function navigateTo(path: string){
        navigate(path);

        setTimeout(()=> {
            if(isMobile && closeHandler){
                closeHandler();
            }
        }, 400);
    }

    return (
        <Box component="ul" p={0} m={0}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>

            <Box mb={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', flex: 1 }}>
                {
                    navigation.map((item, index) => (

                        <Box component="li" key={`nav874-${index}`}
                            sx={{
                                width: '100%', listStyle: 'none', display: 'flex',
                                flexDirection: 'column', alignItems: 'center', gap: '0.3rem'
                            }}>

                            <motion.a className={`${location == item.route ? 'navigation__link active' : 'navigation__link'}`}
                                whileTap={{ scale: 0.9 }} role="button"
                                onClick={()=> navigateTo(item.path)}>
                                {item.icon}
                            </motion.a>

                            <Typography variant='body2' sx={{ fontSize: '11px', fontWeight: '600' }}>
                                {item.title}
                            </Typography>

                        </Box>
                    ))
                }
            </Box>


            <Box>
                <motion.a
                    className="navigation__link" role="button"
                    animate={{ color: '#fff', backgroundColor: '#1DA57A' }}
                    whileTap={{ scale: 0.9 }}
                    style={{marginBottom: '0.3rem'}}
                >
                    <LogoutOutlined fontSize="inherit" />
                </motion.a>
                <Typography variant='body2' sx={{ fontSize: '12px', fontWeight: '600' }}>
                         Sign out
                </Typography>
            </Box>
        </Box>
    )
}

export default Navigations;