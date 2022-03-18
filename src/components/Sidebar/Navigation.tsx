import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'antd';
import { useParams } from 'react-router-dom';
import { navigations } from '../../models/navigations.model';
import "./sidebar.less";


const Navigations = () => {

    return (
        <ul>
            {
                navigations.map((item, index) => (
                    <Navigation key={index} item={item} />
                ))
            }
        </ul>
    )
}

const Navigation = ({ item }: { item: any }) => {
    const params = useParams();
    const current = params['*'];
    
    return (
        <li className={current === item.route ? 'active' : ''}>
            <Tooltip title={item.title}>
                <Link to={item.path} className="w__100">
                    <span>{item.icon}</span>
                </Link>
            </Tooltip>
        </li>
    )
}


export default Navigations;