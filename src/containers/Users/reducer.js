import users from './usersData';

const initialState = users;

const usersReducer = function(state = initialState, action) {
  switch (action.type) {

    default: {
      return state;
    }
  }
}

export default usersReducer;
