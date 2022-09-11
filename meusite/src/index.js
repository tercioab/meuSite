import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/general.css'
import './styles/header.css'
import './styles/nav.css'
import './styles/home.css'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);