import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

//Import router
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Import styles
import './index.css';

//Import Reducers
import transactionReducer from './containers/Transaction/reducer.js';
import appReducer from './containers/App/reducer.js';
import userListReducer from './containers/UserList/reducer.js';
import accountDetailReducer from './containers/AccountDetail/reducer.js';

//Import components
import App from './containers/App';
import BaseLayout from './components/BaseLayout';
import NavBar from './components/NavBar';

//Import containers
import AccountDetail from './containers/AccountDetail';
import Transaction from './containers/Transaction';
import UserList from './containers/UserList';

const rootReducer = combineReducers({
  app: appReducer,
  accountDetail: accountDetailReducer,
  userList: userListReducer,
  transaction: transactionReducer,
})

const store = createStore(rootReducer);

//Wrap Provider around Router
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
