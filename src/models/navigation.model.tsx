import {
    PersonOutlined,
    ForumOutlined,
    WhatsappOutlined,
    NotificationsOutlined,
    SettingsOutlined,
    VideoStableOutlined
} from '@mui/icons-material';

export const navigation = [
    {
        icon: <PersonOutlined fontSize='inherit'/>,
        title: 'My Profile',
        path: '/chatup/profile',
        route: 'profile'
    },
    {
        icon: <ForumOutlined fontSize='inherit'/>,
        title: 'Conversations',
        path: '/chatup',
        route: ''
    },
    {
        icon: <WhatsappOutlined fontSize='inherit' />,
        title: 'Calls History',
        path: '/chatup/calls',
        route: 'calls'
    },
    {
        icon: <VideoStableOutlined fontSize='inherit' />,
        title: 'Shorts',
        path: '/chatup/shorts',
        route: 'shorts'
    },
    {
        icon: <NotificationsOutlined fontSize='inherit' />,
        title: 'Notifications',
        path: '/chatup/notifications',
        route: 'notifications'
    },
    {
        icon: <SettingsOutlined fontSize='inherit' />,
        title: 'Settings',
        path: '/chatup/settings',
        route: 'settings'
    },
];