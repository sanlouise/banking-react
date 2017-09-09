// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';


const Users = ({ users }) => (
  <div className="users">
    {map(users, (user) => (
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
    ))}
  </div>
);

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    users: state.users.users,
  };
}

export default connect(mapStateToProps, null)(Users);
