import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextProvider from './ContextApi';

import './css/reset.css';
import './css/colourScheme.css';
import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>
);
