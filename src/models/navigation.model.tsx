import {
    PersonOutlined,
    ForumOutlined,
    WhatsappOutlined,
    NotificationsOutlined,
    SettingsOutlined,
    PersonSearchOutlined
} from '@mui/icons-material';

export const navigation = [
    {
        icon: <PersonSearchOutlined fontSize='inherit' />,
        title: 'Search',
        path: '/chatup/Search',
        route: 'Search'
    },
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