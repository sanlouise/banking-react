// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';


const AccountDetail = ({ selectedUser }) => (
  <div className="selectedUser">
    <ul className="info">
      <li>Accounts for {selectedUser.name}</li>
    </ul>
    <ul className="accounts">
      {map(selectedUser.accounts, (account) => (
        <ul className="account" key={account.id}>
          <li>Account Type: {account.accountType}</li>
          <li>Balance: USD{account.balance}</li>
        </ul>
      ))}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    selectedUser: state.selectedUser,
    selectedAccounts: state.selectedUser.accounts,
  };
}

export default connect(mapStateToProps, null)(AccountDetail);
