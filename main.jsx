import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/App.jsx'
import { createRoot } from 'react-dom/client';
import './src/index.scss'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Renderizar la aplicación dentro de StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);