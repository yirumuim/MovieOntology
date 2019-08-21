import React, { Component } from 'react';
import { Header } from './components';
import { ExtraContentsContainer } from './containers';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <ExtraContentsContainer/>
      </div>
    );
  }
}
export default App;
