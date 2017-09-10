// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';


const UserDetail = ({ user }) => (
  <div className="user">
    <ul className="info" key={user._id}>
      <li>Name: {user.name}</li>
      <li>Email: {user.email}</li>
      <li>Phone: {user.phone}</li>
      <li>Address: {user.address}</li>
    </ul>
    <ul className="accounts">
      {map(user.accounts, (account) => (
        <ul className="account" key={account.id}>
          <li>Account Type: {account.accountType}</li>
          <li>Balance: USD{account.balance}</li>
        </ul>
      ))}
    </ul>
  </div>
);

function mapStateToProps(state, props) {
  const userId = state.users.findIndex(user => user._id === props.match.params.userId);
  return {
    user: state.users[userId],
  };
}

export default connect(mapStateToProps, null)(UserDetail);
