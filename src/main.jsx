import React from 'react';
import ReactDOM from 'react-dom/client';
//import  App from './HelloWordApp'
// import { FirtsApp } from './FristApp';
import { CounterApp } from './CounterApp'
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value= { 15 }/>
    </React.StrictMode>
);