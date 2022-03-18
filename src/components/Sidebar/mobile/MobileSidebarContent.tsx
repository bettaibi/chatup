import React from 'react';
import { navigations } from '../../../models/navigations.model';
import { Link, useParams } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';

const MobileSidebarContent = ({closeHandler}: {closeHandler: ()=> void}) => {

    const closeSidebar = React.useCallback(() => {
        setTimeout(() =>{
            closeHandler();
            clearTimeout(this);
        },500);
    }, []);

    return (
        <ul>
            {
                navigations.map((item, index) => (
                    <MobileNavigation key={index} item={item} closeSidebar = {closeSidebar} />
                ))
            }
            <li>
                <a role="button">
                    <span className="icon">
                        <LogoutOutlined />
                    </span>
                </a>
                <h5>Sign out</h5>
            </li>
        </ul>
    )
};

const MobileNavigation = ({ item, closeSidebar}: { item: any, closeSidebar: () => void }) => {
    const params = useParams();
    const current = params['*'];
    const classname = `${current === item.route ? 'active' : ''}`;

    return (
        <li>
            <Link to={item.path} className={classname} onClick={closeSidebar}>
                <span className="icon">{item.icon}</span>
            </Link>
            <h5>{item.title}</h5>
        </li>
    )
}

export default MobileSidebarContent;