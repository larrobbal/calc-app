//Importar librearías React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//Importar componente 'App'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//Utilizamos componente 'App'
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals