import React from 'react';
import useToggle from '../../hooks/useToggle';
import { Layout, Button } from 'antd';
import {LeftOutlined } from '@ant-design/icons';
import Navigation from './Navigation';


const { Sider } = Layout;

const Sidebar = () => {
    const { handleToggle, show } = useToggle();

    return (
        <Sider className="d__sm__none" style={{ backgroundColor: 'transparent' }}
            trigger={null} collapsible collapsed={show}>

            <div className="d__flex flex__column justify__content__between h__100">
                <div className="mt__16">
                    <div className="mb__16">
                        <img src="/chatup/img/58.png" alt="chatup_logo" />
                    </div>
                    <Navigation isCollapsed={show} />
                </div>

                <div className="mb__16">
                    <Button type="primary" shape="circle" icon={<LeftOutlined />}
                        onClick={handleToggle} />
                </div>
            </div>

        </Sider>
    )
}

export default Sidebar;