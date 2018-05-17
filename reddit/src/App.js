import React, { Component } from 'react';
import MainHeader from './MainHeader/MainHeader'
import SearchForm from './SearchForm/SearchForm'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: undefined,
    }
  }

  render() {
    return (
      <div className="App">
        <MainHeader/>
        <p className="App-intro">
          Tyler's first react front-end.
        </p>
        <SearchForm/>
      </div>
    );
  }
}

export default App;

