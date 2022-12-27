import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from './context/books';
import { NavigationProvider } from './context/navigation';



const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <NavigationProvider>
        <Provider >
            <App />
        </Provider>
    </NavigationProvider>
);
