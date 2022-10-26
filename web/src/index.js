import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProSidebarProvider } from 'react-pro-sidebar';

import App from './App';

import './Styles/input.css'; 

ReactDOM.createRoot(document.getElementById('root') ,HTMLElement).render(
  <ProSidebarProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ProSidebarProvider>
);
