import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tooltip } from 'antd';
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
    const isActive = current === item.route;

    return (
        <li className={`${isActive ? 'active': ''}`}>
            <Tooltip title={item.title}>
                <Link to={item.path} className="shadow__sm">
                    <span>{item.icon}</span>
                </Link>
            </Tooltip>
        </li>
    )
}


export default Navigations;