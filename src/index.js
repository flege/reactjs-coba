import React from 'react';
import ReactDOM from 'react-dom';
import './Custom.css';
import App from './App';

const items = [
    {
        color : 'Merah',
        img   : 'apel.jpg',
    },
    {
        color : 'Kuning',
        img   : 'nanas.jpg',
    },
    {
        color : 'Hijau',
        img   : 'alpukat.jpg',
    },
    {
        color : 'Biru',
        img   : 'berry.jpg',
    },
];

ReactDOM.render(<App items={items}/>, document.getElementById('root'));