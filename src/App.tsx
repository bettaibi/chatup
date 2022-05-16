import { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SnackbarComponent from './components/SnackbarComponent';
import { SubjectProvider } from './context/SubjectProvider';

// APP ROUTES
const Signin = lazy(() => import('./pages/Auth/Signin/Signin'));
const Signup = lazy(() => import('./pages/Auth/Signup'));
const UserLayout = lazy(() => import('./pages/UserLayout'));

function App() {

  return (
    <BrowserRouter>
      <SubjectProvider>

        {/* APP ROUTING */}
        <Suspense fallback={<span>Loading...</span>}>
          <Routes>
            <Route path="/chatup/*" element={<UserLayout />} />

            <Route path="/chatup/signin" element={<Signin />} />
            <Route path="/chatup/signup" element={<Signup />} />
          </Routes>
        </Suspense>
        {/* END APP ROUTING */}

        <SnackbarComponent />
      </SubjectProvider>
    </BrowserRouter>
  );
}

export default App;
