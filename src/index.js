import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

//  Import router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Import styles
import './styles.css';

// Import Reducers
import usersReducer from './containers/Users/reducer.js';

// Import components
import BaseLayout from './components/BaseLayout';
import NavBar from './components/NavBar';

// Import containers
import AccountDetail from './containers/AccountDetail';
import UserDetail from './containers/UserDetail';
import Users from './containers/Users';

// Create our store
const rootReducer = combineReducers({
  users: usersReducer,
});
const store = createStore(rootReducer);

// Wrap Provider around Router
ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <NavBar>
          <Switch>
            <Route exact path="/users/:userId/accounts/:accountId" component={AccountDetail} />
            <Route exact path="/users/:userId" component={UserDetail} />
            <Route exact path="/*" component={Users} />
          </Switch>
        </NavBar>
      </BaseLayout>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
