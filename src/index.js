import React from 'react';
import ReactDOM from 'react-dom';
import './Custom.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const items = [
    {
        name : 'Apple',
        color : 'merah',
        img   : 'apel.jpg',
    },
    {
        name : 'Pineapple',
        color : 'kuning',
        img   : 'nanas.jpg',
    },
    {
        name : 'Avocado',
        color : 'hijau',
        img   : 'alpukat.jpg',
    },
    {
        name : 'Berry',
        color : 'biru',
        img   : 'berry.jpg',
    },
    {
        name : 'Calculator',
        color : 'gray',
        img   : '',
    },
];

ReactDOM.render(<App items={items}/>, document.getElementById('root'));

serviceWorker.register();