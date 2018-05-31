import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"
import axios from 'axios'
import auth0 from 'auth0-js'

class ResourceUse extends Component {

  constructor(options) {
    super(options)
    this.webAuth = new auth0.WebAuth({
      domain:       `${process.env.DOMAIN}`,
      clientID:     `${process.env.CLIENT_ID}`
    })
    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
  }
  handleSubmit = (e) => {
    axios({
      'baseURL': 'https://yorev.eu.auth0.com/oauth',
      'url': 'token',
      'method': 'post'

    }).then((res) => {
      this.setState({message: res.data})
    })
  }
  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value});
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
              <Button
                type="submit"
              >
                Get my resource use
              </Button>
            </form>
        </div>
      )
    else return (<p>{this.state.message}</p>)
  }
}

export default ResourceUse
