import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import appReducer from './containers/App/appReducer';

//router imports
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Import styles
import './index.css';

//Import components
import App from './containers/App';
import BaseLayout from './components/BaseLayout';
import NavBar from './components/NavBar';

const rootReducer = combineReducers({
  app: appReducer,
})

const store = createStore(rootReducer);

//wrap provider around router
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <NavBar>
          <Switch>
            <Route exact path="/" component={App} />
          </Switch>
        </NavBar>
      </BaseLayout>
    </BrowserRouter>
  </Provider>


  , document.getElementById('root'));
