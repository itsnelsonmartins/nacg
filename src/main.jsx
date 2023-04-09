import React from 'react';
import ReactDOM from 'react-dom/client';
import ContextProvider from './ContextApi';
import App from './App';

import './css/reset.css';
import './css/colourScheme.css';
import './css/bulma.min.css';
import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>
);
