import { 
    AliwangwangOutlined, 
    SettingOutlined, 
    WhatsAppOutlined, 
    NotificationOutlined, 
    UserOutlined, 
    MessageOutlined
} from '@ant-design/icons';

export const navigations = [
    {
        icon: <UserOutlined />,
        title: 'My Profile',
        path: '/chatup/profile',
        route: 'profile'
    },
    {
        icon: <MessageOutlined />,
        title: 'Conversations',
        path: '/chatup',
        route: ''
    },
    {
        icon: <WhatsAppOutlined />,
        title: 'Calls History',
        path: '/chatup/calls',
        route: 'calls'
    },
    {
        icon: <AliwangwangOutlined />,
        title: 'Shorts',
        path: '/chatup/shorts',
        route: 'shorts'
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
    },
];