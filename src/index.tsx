import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const baseRouter = (<BrowserRouter><App /></BrowserRouter>);
const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.render(baseRouter, rootElement);
registerServiceWorker();
