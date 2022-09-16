import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/general.css'
import './styles/header.css'
import './styles/nav.css'
import './styles/home.css'
import './styles/bio.css'
import './styles/sobre.css'
import './styles/skills.css'
import './styles/footer.css'
import './styles/projetos.css'

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);