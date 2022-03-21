import React from 'react';
import { Tooltip } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

import Navigations from './Navigation';
import useBreakpoint from '../../hooks/useBreakpoint';
import MobileSidebar from './mobile/MobileSidebar';

const Sidebar = () => {
    const { breakpoint } = useBreakpoint();

    return (
        <>
            {(breakpoint === 'md' || breakpoint === 'lg') ?
                <div className="sidebar scrollabe d__flex flex__column align__item__center">

                    <Navigations />


                    <div className="d__flex flex__column align__item__center w__100">
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