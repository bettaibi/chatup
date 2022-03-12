import React from 'react';
import { Button, Tooltip } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import Navigation from './Navigation';

const Sidebar = () => {

    return (
        <div className="d__sm__none" style={{ backgroundColor: 'transparent', width: '80px' }}>

            <div className="d__flex flex__column justify__content__between h__100">
                <div style={{ marginTop: '0.4rem' }}>
                    <div className="mb__16 d__flex flex__column align__item__center">
                        <img src="/chatup/img/58.png" alt="chatup_logo" />
                    </div>
                    <Navigation />
                </div>

                <div className="mb__16 d__flex flex__column align__item__center">
                    <Tooltip title="Sign out">
                        <Button type="primary" shape="circle" icon={<LogoutOutlined />} size="large" />
                    </Tooltip>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;