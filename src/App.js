import React from 'react';
import './App.css';
import AppRouter from '../src/Config/router';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    )
  }
}

export default App;