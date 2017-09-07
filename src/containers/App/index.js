import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className= "jumbotron">
          <h1 className= "display-3">Banking Appt</h1>
          <p>Your world wide banking leader.</p>
          <p>Accurate account results.</p>
          <p className= "lead">
            <Link className= "btn btn-primary btn-lg" to="/users" role="button">Check Users</Link>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.app.name
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
	 }
}


const propTypes = {
  name: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
