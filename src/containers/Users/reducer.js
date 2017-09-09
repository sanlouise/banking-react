import { combineReducers } from 'redux';
import {
  ACCOUNT_SELECTED,
  USER_SELECTED,
  WITHDRAW_FUNDS,
} from './constants';

import getInitialUsers from './initialUsers';


const initialState = {
  users: getInitialUsers(),
  selectedUser: {},
  selectedAccount: {},
};


const usersReducer = function(state = initialState, action) {
  switch (action.type) {
    case USER_SELECTED: {
      return {
        ...state,
        selectedUser: action.selectedUser,
      };
    }
    case ACCOUNT_SELECTED: {
      return {
        ...state,
        selectedAccount: {},
      };
    }
    case WITHDRAW_FUNDS:{
      return {
        ...state,
        selectedAccount: {
          ...state.selectedAccount,
          balance: state.selectedAccount.balance - action.amount,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export default usersReducer;
