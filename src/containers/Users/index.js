// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import sortBy from 'lodash/sortBy';
// Externals
import { selectUserAction } from '../UserDetail/actions';
// Internals
import './styles.css'


const Users = ({ users }) => {
  return (
    <div className="container row center">
      <div className="users col m8 col offset-m2">
      <h1>All Customers</h1>
        <ul>
          {map(sortBy(users, ['name']), (user) => (
            <li key={user._id} className="username">
              <Link
                to={`/users/${user._id}`}
                onClick={() => this.props.selectUser(user)}
              >
                {user.name}
              </Link>
           </li>
          ))}
        </ul>
      </div>
    </div>
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
