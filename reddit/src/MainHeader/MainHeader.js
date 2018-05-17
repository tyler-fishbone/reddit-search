import React, { Component } from 'react'
// import logo from '../logo.svg'

class MainHeader extends Component {
  render() {
    return (
      <header className="App-header">
        <img src="http://thecraftchop.com/files/images/elmohead.svg" className="App-logo" alt="logo" />
        <h1 className="App-title">Reddit Board Search: Written in React</h1>
      </header>
    )
  }
}

export default MainHeader