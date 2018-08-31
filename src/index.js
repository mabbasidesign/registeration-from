import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Register from "./components/register";
import registerServiceWorker from './registerServiceWorker';
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<Register />, document.getElementById('root'));
registerServiceWorker();