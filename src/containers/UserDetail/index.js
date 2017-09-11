// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import PropTypes from 'prop-types';
// Externals
import Accordion from '../../components/Accordion';


const UserDetail = ({ user }) => {
  const collapsibles = map(user.accounts, (account) => ({
    header: `Account Type: ${account.accountType}, #${account.id}`,
    body: `Balance: ${account.balance}`,
  }));

  return (
    <div className="user center">
      <ul className="info" key={user._id}>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Phone: {user.phone}</li>
        <li>Address: {user.address}</li>
      </ul>
      <Accordion collapsibles={collapsibles} />
    </div>
  );
}

function mapStateToProps(state, props) {
  const userId = state.users.findIndex(user => user._id === props.match.params.userId);
  return {
    user: state.users[userId],
  };
}

export default connect(mapStateToProps, null)(UserDetail);
