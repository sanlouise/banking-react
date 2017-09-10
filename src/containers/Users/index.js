// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
// Externals
import { selectUserAction } from '../UserDetail/actions';


const Users = ({ users }) => {
  console.log('users', users);
  return (
    <ul className="users">
      {map(users, (user) => (
        <li key={user._id} className="list-group-item">
          <Link
            to={`/users/${user._id}`}
            onClick={() => this.props.selectUser(user)}
          >
            {user.name}
          </Link>
       </li>
      ))}
    </ul>
  );
}

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectUser: (user) => dispatch(selectUserAction(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
