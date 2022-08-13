import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/Index';
import * as serviceWorkerRegistration from "./WorkerRegistration";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />
);

serviceWorkerRegistration.register();
