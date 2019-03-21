import React from 'react';
import ReactDOM from 'react-dom';
import './Custom.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const items = [
    {
        name : 'Apple',
        color : 'Merah',
        img   : 'apel.jpg',
    },
    {
        name : 'Pineapple',
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

serviceWorker.register();