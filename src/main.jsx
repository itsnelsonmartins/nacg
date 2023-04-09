import React from 'react';
import ReactDOM from 'react-dom/client';
import ContextProvider from './ContextApi';
import App from './App';

import 'bulma/css/bulma.min.css';
import './css/colourScheme.css';
import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>
);
