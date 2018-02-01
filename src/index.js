import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Webpage from './comm/web/webpage';
import { Provider } from 'react-redux';
import { store } from './store/store';
ReactDOM.render(
    <Provider store={store}>
        <Webpage />
    </Provider>
  ,
   document.getElementById('root'));
registerServiceWorker();
