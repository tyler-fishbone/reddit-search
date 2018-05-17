import React, { Component } from 'react'
import superagent from 'superagent'

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchFormBoard: '',
      searchFormLimit: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    superagent.get(`http://www.reddit.com/r/${this.state.searchFormBoard}.json?limit=${this.state.searchFormLimit}`)
    .then(res => this.props.setAppState({results: res.body}))
    .catch(console.error)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="reddit-search-form">
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            placeholder="Enter a reddit board"
            name="searchFormBoard"
            value={this.state.searchFormBoard}
            onChange={this.handleChange}
            />
          <input
            type="number"
            placeholder="Number of listings"
            name="searchFormLimit"
            value={this.state.searchFormLimit}
            onChange={this.handleChange}
            />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default SearchForm