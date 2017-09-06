import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React, {this.props.name}</h2>
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
