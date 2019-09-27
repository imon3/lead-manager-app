import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Header from './layout/Header';

class App extends Component {
  render() {
    return <Header />;
  }
}

ReactDom.render(<App />, document.getElementById('app'));
