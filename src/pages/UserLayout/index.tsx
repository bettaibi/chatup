import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import {
    Box,

} from '@mui/material';
import Sidebar from '../../components/Sidebar';

const Shorts = lazy(() => import('./Shorts'));
const Settings = lazy(() => import('./Settings'));
const Chat = lazy(() => import('./Chat'));
const Notifications = lazy(() => import('./Notifications'));
const Profile = lazy(() => import('./Profile'));
const Calls = lazy(() => import('./Calls'));


const UserLayout = () => {

    return (
        <Box className="bg__gradient"
            sx={{ gap: '1rem', minHeight: '100vh', display: 'flex', flexDirection: 'row', padding: { sm: '1rem' } }} p={0}>

            <Sidebar />

            <Box className="page__wrapper" sx={{ borderRadius: { sm: '18px' } }}>

                <Box className="scrolled">
                    <Suspense fallback={<span>inner loading...</span>}>
                        <Routes>
                            <Route path="/" element={<Chat />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="/notifications" element={<Notifications />} />
                            <Route path="/shorts" element={<Shorts />} />
                            <Route path="/calls" element={<Calls />} />
                            <Route
                                path="*"
                                element={<Navigate to="/chatup" replace />}
                            />
                        </Routes>
                    </Suspense>
                </Box>
            </Box>
        </Box>
    )
}

export default UserLayout;