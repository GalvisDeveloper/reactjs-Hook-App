import React from 'react';
import ReactDOM from 'react-dom';
import HookApp from './components/HookApp';
// import CounterApp from './components/useState/CounterApp';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <CounterApp /> */}
    <HookApp />
  </React.StrictMode>,
  document.getElementById('root')
);

