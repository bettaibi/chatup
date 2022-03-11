import {lazy, Suspense} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Signin = lazy(()=> import('./pages/Auth/Signin'));
const Signup = lazy(()=> import('./pages/Auth/Signup'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="/chatup" element={<Signin />} />
          <Route path="/chatup/signup" element={<Signup />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
