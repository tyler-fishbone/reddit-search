import React, { Component } from 'react';
import MainHeader from './MainHeader/MainHeader'
import SearchForm from './SearchForm/SearchForm'
import SearchResultList from './SearchResultList/SearchResultList'

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
          Search for reddit boards below.
        </p>
        <SearchForm setAppState={this.setState.bind(this)}/>

        {
          this.state.results ?
          <SearchResultList results={this.state.results}/>
          :
          undefined
        }


      </div>
    );
  }
}

export default App;

