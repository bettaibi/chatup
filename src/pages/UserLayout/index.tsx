import { lazy, Suspense } from 'react';
import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const Shorts = lazy(() => import('./Shorts'));
const Settings = lazy(() => import('./Settings'));
const Chat = lazy(() => import('./Chat'));
const Notifications = lazy(() => import('./Notifications'));
const Profile = lazy(() => import('./Profile'));
const Calls = lazy(() => import('./Calls'));

const { Content } = Layout;

const UserLayout = () => {

    return (
        <div className="bg__gredient p__sm__16 d__flex flex__row" style={{gap: '1rem', minHeight: '100vh'}}>
            <Sidebar />

            <Content className="main__content scrollabe">
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
        </div>
    )
}

export default UserLayout;