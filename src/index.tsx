import React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from './App';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {ErrorBoundary} from './components/ErrorBoundary';
import {theme} from './services/customTheme';

import './index.scss';

const rootNode = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

rootNode.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
