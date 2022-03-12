import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../../components/Sidebar';
const { Header, Footer, Sider, Content } = Layout;

const UserLayout = () => {

    return (
        <div className="bg__gredient p__sm__16">
             <Layout className="glass__blur responsive_layout">
                    <Sidebar />
                    <Content className="main__content p__16">Content</Content>
             </Layout>
        </div>
    )
}

export default UserLayout;