import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const items = ['Home', 'Tab 2', 'Tab 3', 'Tab 4'];

ReactDOM.render(<App items={items}/>, document.getElementById('root'));