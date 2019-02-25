import React from 'react';
import ReactDOM from 'react-dom';
import './Custom.css';
import App from './App';

const items = ['Merah', 'Kuning', 'Hijau', 'Biru'];

ReactDOM.render(<App items={items}/>, document.getElementById('root'));