import React from 'react';
import {
    Box,
    Stack,
    Avatar,
    Typography
} from '@mui/material';
import { useAside } from '../../../../context/SubjectProvider';
import Details from './Details';

const colors = ['#f9bcc4', '#ffd291', '#eea7f3', '#d683f0','#a7dcf8', '#c89cf3', '#dda6ee', '#b3c5f6'];
const Contacts = ({ contactList }: { contactList: any[] }) => {

    return (
        <React.Fragment>
            {
                contactList.map((item, index) => (
                    <Contact key={'cx' + index} item={item} index={index} />
                ))
            }
        </React.Fragment>
    )
}

const Contact = ({ item, index }: { item: any, index:number }) => {
    const { toggleAside } = useAside();

    function openAside(){
        toggleAside(
            <Details />
        );
    }

    function randomColor(): string {
        let index = Math.floor(Math.random() * 8) -1;
        return colors[index];
    }

    return (
        <Box>
            <Stack className="spacing px border__bottom" py={.3}
                sx={{ backgroundColor: 'primary.light', position: 'sticky', top: 54, zIndex: 9,
                borderTop: index !== 0? 0: '1px solid rgba(0,0,0,.12)'}}
                alignItems="center" direction="row">

                <Typography color="secondary" component="span">
                    {item.letter.toUpperCase()}
                </Typography>
            </Stack>
            {
                item.users.map((user: any, index: number) => (
                    <Stack key={'us' + index} className="spacing px border__bottom" py={1}
                        direction="row" spacing={2} alignItems="center"
                        sx={{ '&:hover': { backgroundColor: 'primary.light' }, cursor: 'pointer' }}
                        onClick={openAside}>
                        
                        <Avatar sx={{backgroundColor: randomColor()}}>
                            {user.name.charAt(0).toUpperCase()}
                        </Avatar>

                        <Box>
                            <Typography>
                                {user.name}
                            </Typography>
                            <Typography color="secondary" component="span">
                                other info
                            </Typography>
                        </Box>
                    </Stack>
                ))
            }
        </Box>
    )
}

export default Contacts;