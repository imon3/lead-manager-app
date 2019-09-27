import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className='container'>
          <Dashboard />
        </div>
      </>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
