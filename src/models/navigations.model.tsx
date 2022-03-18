import { 
    HomeOutlined, 
    SettingOutlined, 
    WhatsAppOutlined, 
    NotificationOutlined, 
    UserOutlined, 
    MessageOutlined,
    createFromIconfontCN
} from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: [
        '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
        '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js',
        '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js'
    ],
    
});

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
        icon: <WhatsAppOutlined />,
        title: 'Calls History',
        path: '/chatup/calls',
        route: 'calls'
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

{/* <AliwangwangOutlined /> */}