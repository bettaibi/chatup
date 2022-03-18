import { HomeOutlined, SettingOutlined, NotificationOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';

export const navigations = [
    {
        icon: <HomeOutlined />,
        title: 'Home',
        path: '/chatup',
        route: ''
    },
    {
        icon: <UserOutlined />,
        title: 'My Profile',
        path: '/chatup/profile',
        route: 'profile'
    },
    {
        icon: <MessageOutlined />,
        title: 'Messages',
        path: '/chatup/chat',
        route: 'chat'
    },
    {
        icon: <NotificationOutlined />,
        title: 'Notifications',
        path: '/chatup/notifications',
        route: 'notifications'
    },
    {
        icon: <SettingOutlined />,
        title: 'Settings',
        path: '/chatup/settings',
        route: 'settings'
    }
];