import React, { Component } from 'react'
import axios from 'axios'

class News extends Component {

  constructor(options) {
    super(options)
    this.state = {}
  }
  componentDidMount() {
    axios.request({
        baseURL: process.env.REACT_APP_API,
        url: '/news'
        ,headers: {'x-api-key': 'P0Cjq2Ud7h8GUqWeRT8Cs6ydi0hFuEMvaI2b191I'}
    }).then(res => {
      this.setState({message: res.data})
    })
  }
  render() {
    return (
      <div>
        {this.state.message &&
          this.state.message
        }
      </div>
    )
  }
}

export default News;
