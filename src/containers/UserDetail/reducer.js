import { combineReducers } from 'redux';

const initialState = {
  selectedUser: {}
}

const selectedUserReducer = function(state = initialState, action) {
  switch (action.type) {
    case USER_SELECTED: {
      return {
        ...state,
        selectedUser: action.selectedUser,
      };
    }
    
    default: {
      return state;
    }
  }
}

export default selectedUserReducer;
