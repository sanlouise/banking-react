import {
  USER_SELECTED,
} from './constants';


export function selectUserAction(user) {
  return {
    type: USER_SELECTED,
    user,
  };
}
