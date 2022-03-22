import React, {useState} from 'react';
import { PageHeader } from 'antd';
import Hidden from '../../../components/Hidden';

import "./calls.less";
import Call from './Call';

const callsArray = [
    {id: 1, type: 'missing'},
    {id: 2, type: 'incoming'},
    {id: 3, type: 'outgoing'},
    {id: 4, type: 'outgoing'},
    {id: 5, type: 'missing'},
];

const Calls = () => {
    const [activeTab, setActiveTab] = useState<string>('all');

    return (
        <div id="calls">
            <PageHeader
                onBack={() => window.history.back()}
                title="My Calls"
                subTitle="History"
                className='calls__header'
            />

            <div className="content d__flex scrollabe">
                <Hidden hiddenFor={['xs', 'sm']}>
                    <ul className="options shadow__sm">
                        <li className={activeTab === 'all' ? 'active' : ''} onClick={()=> {setActiveTab('all')}}>All</li>
                        <li className={activeTab === 'incoming' ? 'active' : ''} onClick={()=> {setActiveTab('incoming')}}>Incoming Calls</li>
                        <li className={activeTab === 'outgoing' ? 'active' : ''} onClick={()=> {setActiveTab('outgoing')}}>Outgoing Calls</li>
                        <li className={activeTab === 'missing' ? 'active' : ''} onClick={()=> {setActiveTab('missing')}}>Missing Calls</li>
                    </ul>
                </Hidden>

                <div className="calls__list">
                    {
                        callsArray.map((item)=> (
                            <Call key={item.id} item = {item}/>
                        ))
                    }
                </div>

            </div>
        </div>
    )
};


export default Calls;