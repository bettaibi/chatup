import React from 'react';
import { Avatar, Tooltip } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';

import Navigations from './Navigation';
import useBreakpoint from '../../hooks/useBreakpoint';
import MobileSidebar from './mobile/MobileSidebar';

const Sidebar = () => {
    const { breakpoint } = useBreakpoint();

    console.log("sidebar compoent")

    return (
        <>
            {(breakpoint === 'md' || breakpoint === 'lg') ?
                <div className="sidebar d__flex flex__column justify__content__around h__100" style={{ backgroundColor: 'transparent', width: '80px' }}>


                    <div className="d__flex align__item__center justify__content__center ">
                         <img src="./img/57.png" alt="app_logo" />
                    </div>

                    <Navigations />


                    <div className="d__flex flex__column align__item__center w__100" style={{ marginRight: '3px' }}>
                        <Tooltip title="Sign out">
                            <a role="button" className="shadow__sm signout__btn">
                                <span>
                                    <LogoutOutlined />
                                </span>
                            </a>
                        </Tooltip>
                    </div>

                </div> :
                <MobileSidebar />
            }
        </>
    )
}

export default Sidebar;