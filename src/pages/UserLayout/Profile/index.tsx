import React from 'react';
import ProfileAvatar from './ProfileAvatar';
import { Typography, Tabs } from 'antd';

import './profile.less';
import About from './About';

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const Background = "/chatup/img/cover.jpg";

const Profile = () => {
    console.log("profile component")
    
    return (
        <React.Fragment>
            <div className="bg__white shadow__sm w__100 content__top__radius content__top__radius" id="profile">
                <div className="bg__cover" style={{ backgroundImage: `url(${Background})` }} />
                <ProfileAvatar />

                <div className="user__details d__flex flex__column justify__content__center align__item__center w__100">
                    <Title level={5} className="m__0">Nidhal Bettaibi</Title>
                    <Text type="secondary">Kasserine, Tunisia</Text>
                    <div className="d__flex align__item__center justify__content__center row__gap" style={{ marginTop: '0.5rem' }}>
                        <div>
                            <Title level={5} className="m__0">200k</Title>
                            <Text type="secondary">FOLLOWERS</Text>
                        </div>
                        <div>
                            <Title level={5} className="m__0">1.2k</Title>
                            <Text type="secondary">FOLLOWING</Text>
                        </div>
                    </div>
                </div>

                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="About" key="1" style={{padding : 0}}>
                        <About />
                    </TabPane>
                    <TabPane tab="Followers" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Following" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                    <TabPane tab="My Shorts" key="4">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </div>

        </React.Fragment>
    )
}

export default Profile;