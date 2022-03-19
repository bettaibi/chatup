import { lazy, Suspense } from 'react';
import { Layout } from 'antd';
import Sidebar from '../../components/Sidebar';
import { Route, Routes } from 'react-router-dom';

const Shorts = lazy(() => import('./Shorts'));
const Settings = lazy(() => import('./Settings'));
const Chat = lazy(() => import('./Chat'));
const Notifications = lazy(() => import('./Notifications'));
const Profile = lazy(() => import('./Profile'));
const Calls = lazy(() => import('./Calls'));

const { Content } = Layout;

const UserLayout = () => {
    
    return (
        <div className="bg__gredient p__sm__16">
            <Layout className="glass__blur responsive_layout d__flex flex__row" style={{overflow: 'hidden'}}>
                <Sidebar />
                <Content className="main__content p__16">
                    {/* Something static here */}
                    <Suspense fallback={<span>inner loading...</span>}>
                        <Routes>
                            <Route path="/" element={<Chat />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="/notifications" element={<Notifications />} />
                            <Route path="/shorts" element={<Shorts />} />
                            <Route path="/calls" element={<Calls />} />
                        </Routes>
                    </Suspense>
                </Content>
            </Layout>
        </div>
    )
}

export default UserLayout;