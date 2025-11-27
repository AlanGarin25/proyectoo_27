import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react'; // ✅ Import necesario

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-qdw1h8dxf3zwx410.us.auth0.com"
      clientId="2KKCVdfO1YvyA4cIUfjrobhb5P6DywQX"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App /> {/* ✅ Corregido a 'App' */}
    </Auth0Provider>
  </React.StrictMode>
);

// Si quieres medir el rendimiento en tu app
reportWebVitals();
