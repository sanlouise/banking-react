import {
  ACCOUNT_SELECTED,
  USER_SELECTED,
  WITHDRAW_FUNDS,
} from './constants';


export function selectUser(user) {
  return {
    type: USER_SELECTED,
    user,
  };
}

export function selectAccount(accountId) {
  return {
    type: ACCOUNT_SELECTED,
    selectedAccount,
  };
}

export function withdrawFunds(amount) {
  return {
    type: WITHDRAW_FUNDS,
    amount,
  }
}
