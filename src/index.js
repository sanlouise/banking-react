import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import createStore from 'redux';
import appReducer fom './containers/App/appReducer';

const rootReducer = combineReducers({
  app: appReducer,
})

const store = createStore(rootReducer);

ReactDOM.render((
  <Provider store={}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
