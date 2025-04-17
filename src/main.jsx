
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/index';
import { BreadcrumbContextProvider } from './contexts/breadcrumbsContext';
import { AuthContextProvider } from './contexts/authContext';

// Global styles
import './assets/styles/bootstrap.min.css';
import './assets/styles/font-awesome.min.css';
import './assets/styles/style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
      <BreadcrumbContextProvider>
        <AppRoutes />
      </BreadcrumbContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
