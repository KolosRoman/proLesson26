import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles/styles.scss';
import {App} from './components/App.jsx';





const root = createRoot(document.getElementById('app'));


root.render(<App />)