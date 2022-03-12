import React from 'react';
import { HomeOutlined, SettingOutlined, NotificationOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Tooltip } from 'antd';
import { useParams } from 'react-router-dom';
import "./sidebar.less";

const navigations = [
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

const Navigation = () => {
    const params = useParams();
    const current = params['*'];

    return (
        <ul>
            {
                navigations.map((item, index) => (
                    <li className={current === item.route ? 'active' : ''} key={index}>
                        <Tooltip title={item.title}>
                            <Link to={item.path} className="w__100">
                                <span>{item.icon}</span>
                            </Link>
                        </Tooltip>
                    </li>
                ))
            }
        </ul>
    )
}

export default Navigation;