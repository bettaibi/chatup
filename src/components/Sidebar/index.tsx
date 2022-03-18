import React from 'react';
import { Button, Tooltip } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
 
import Navigations from './Navigation';
import useBreakpoint from '../../hooks/useBreakpoint';
import MobileSidebar from './mobile/MobileSidebar';

const Sidebar = () => {
    const { breakpoint } = useBreakpoint();

    console.log("sidebar compoent")

    return (
        <>
           { (breakpoint === 'md' || breakpoint ==="lg") ?
            <div className="sidebar" style={{ backgroundColor: 'transparent', width: '80px' }}>

                <div className="d__flex flex__column justify__content__between h__100">
                    <div style={{ marginTop: '0.4rem' }}>
                        <div className="mb__16 d__flex flex__column align__item__center">
                            <img src="/chatup/img/58.png" alt="chatup_logo" />
                        </div>
                        <Navigations />
                    </div>

                    <div className="mb__16 d__flex flex__column align__item__center">
                        <Tooltip title="Sign out">
                            <Button type="primary" shape="circle" icon={<LogoutOutlined />} size="large" />
                        </Tooltip>
                    </div>
                </div>

            </div>:
            <MobileSidebar /> 
            }
        </>
    )
}

export default Sidebar;