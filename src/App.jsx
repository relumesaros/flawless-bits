import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import Router from './components/Router';
import 'globalStyles.css';
import GlobalContext from './context/GlobalContext';

class App extends Component {
  render() {
    return (
      <GlobalContext>
        <Router />
      </GlobalContext>
    );
  }
}

export default hot(App);
