import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tooltip } from 'antd';
import { navigations } from '../../models/navigations.model';
import "./sidebar.less";


const Navigations = () => {

    return (
        <ul style={{flex:1}}>
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
        <li>
            <Tooltip title={item.title}>
                <Link to={item.path} className={`${isActive ? 'shadow__sm active': ''}`}>
                    <span>{item.icon}</span>
                </Link>
            </Tooltip>
        </li>
    )
}


export default Navigations;