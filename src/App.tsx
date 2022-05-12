import { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SnackbarComponent from './components/SnackbarComponent';
import { SnackBarProvider } from './context/SnackBarProvider';

// APP ROUTES
const Signin = lazy(() => import('./pages/Auth/Signin/Signin'));
const Signup = lazy(() => import('./pages/Auth/Signup'));
const UserLayout = lazy(() => import('./pages/UserLayout'));

function App() {

  return (
    <BrowserRouter>
      <SnackBarProvider>

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
      </SnackBarProvider>
    </BrowserRouter>
  );
}

export default App;
