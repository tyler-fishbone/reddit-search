import React, { Component } from 'react'
import superagent from 'superagent'

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchFormBoard = '',
      searchFormLimit = 0,
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
    
  }
}