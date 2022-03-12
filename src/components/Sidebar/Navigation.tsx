import React from 'react';
import { HomeOutlined, SettingOutlined, NotificationOutlined, UserOutlined, WechatOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import "./sidebar.less";

const navigations = [
    {
        icon: <HomeOutlined />,
        title: 'Home',
        path: '/chatup',
    },
    {
        icon: <UserOutlined />,
        title: 'My Profile',
        path: '/chatup',
    },
    {
        icon: <WechatOutlined />,
        title: 'Messages',
        path: '/chatup',
    },
    {
        icon: <NotificationOutlined />,
        title: 'Notifications',
        path: '/chatup',
    },
    {
        icon: <SettingOutlined />,
        title: 'Settings',
        path: '/chatup',
    }
];

const Navigation = ({isCollapsed}: {isCollapsed: boolean}) => {

    return (
        <ul>
            {
                navigations.map((item, index) => (
                    <li className={index==0?'active':''} key={index}>
                        <a href="#" className={clsx({'inline__links': !isCollapsed, 'block__links': isCollapsed})}>
                            <span>{item.icon}</span>
                            {!isCollapsed && <span>{item.title}</span>}
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}

export default Navigation;