import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Registeration from "./components/registeration";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Registeration />, document.getElementById('root'));
registerServiceWorker();
