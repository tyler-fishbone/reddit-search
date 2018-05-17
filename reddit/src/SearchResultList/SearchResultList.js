import React, { Component } from 'react'

export default class SearchResultList extends Component {
  constructor(props) {
    super(props)
    
    this.ResultsList = this.ResultsList.bind(this)
  }
  
  ResultsList(props) {
    console.log(props)
    const children = props.results.data.children;
    const listItems = children.map((child) =>
      <ul>
        <li><h2>{child.data.title}</h2></li>
        <li><p>Posted by:{child.data.author}</p></li>
        <li><img src={child.data.thumbnail} /></li>
        <li><a href={`http://reddit.com${child.data.permalink}`}>Link to post</a></li>
      </ul>
    )
    return (
      <div>{listItems}</div>
    )
  }
  
  
  render() {
    return (
      <div className="reddit-search-results">
        {this.ResultsList(this.props)}
      </div>
    )
  }
}



// createResultsList = () => {
//   let resultsList = []

//   console.log(this.state)
//   // Outer loop to create parent
//   for (let i = 0; i < 5; i++) {
//     let children = []
//     children.push(<li><h2>{this.props.results.data.children[i].data.title}</h2></li>)
//     children.push(<li><p>Posted by:{this.props.results.data.children[i].data.author}</p></li>)
//     children.push(<li><img src={this.props.results.data.children[i].data.url} /></li>)
//     //Create the parent and add the children
//     resultsList.push(<ul>{children}</ul>)
//   }
//   return resultsList
// }