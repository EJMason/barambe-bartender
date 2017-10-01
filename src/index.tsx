import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './redux/index';
import App from './App';

// import 'semantic-ui-css/semantic.min.css';
import './styles/main.css';

const baseRouter = (
  <Provider store={configureStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.render(baseRouter, rootElement);
registerServiceWorker();
