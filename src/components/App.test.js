import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

it('renders without crashing', () => {
  const div = document.getElementById('root');
  ReactDOM.render( < App / > , div);
});