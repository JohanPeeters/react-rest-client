import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"
import axios from 'axios'
import auth0 from 'auth0-js'

class ResourceUse extends Component {

  constructor(options) {
    super(options)
    this.webAuth = new auth0.WebAuth({
      domain:       `${process.env.REACT_APP_DOMAIN}`,
      clientID:     `${process.env.REACT_APP_CLIENT_ID}`
    })
    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (e) => {
    e.preventDefault()
    axios({
      'baseURL': `https://${process.env.REACT_APP_DOMAIN}/oauth`,
      'url': '/token',
      'method': 'post',
      'data': {
        audience: 'backend',
        username: this.state.email,
        password: this.state.password,
        grant_type: 'password',
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET
      }
    }).then((res) => {
      axios({
          baseURL: 'https://x2ba7g748k.execute-api.eu-west-1.amazonaws.com/demo',
          url: '/resourceUse',
          headers: {
            'Authorization': `Bearer ${res.data.access_token}`
          }
      })
      .then((res) => {
        this.setState({
          message: res.data,
          authenticated: true
        })
      })
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  render() {
    if(!this.state.authenticated) return(
        <div>
          <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email">
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup controlId="password">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  value={this.state.password}
                  type="password"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button type="submit">
                Get my resource use
              </Button>
            </form>
        </div>
      )
    else return (<p>{this.state.message}</p>)
  }
}

export default ResourceUse
