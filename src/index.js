import React from 'react';
import ReactDOM from 'react-dom';
import './Custom.css';
import App from './App';

const items = [
    {
        name : 'Apple',
        color : 'Merah',
        img   : 'apel.jpg',
    },
    {
        name : 'Nanas',
        color : 'Kuning',
        img   : 'nanas.jpg',
    },
    {
        name : 'Avocado',
        color : 'Hijau',
        img   : 'alpukat.jpg',
    },
    {
        name : 'Berry',
        color : 'Biru',
        img   : 'berry.jpg',
    },
];

ReactDOM.render(<App items={items}/>, document.getElementById('root'));