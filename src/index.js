import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginForm from "./components/loginForm";
import registerServiceWorker from './registerServiceWorker';
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<LoginForm />, document.getElementById('root'));
registerServiceWorker();