import React, { Component } from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"
import axios from 'axios'
import auth0 from 'auth0-js'

class Friends extends Component {

  constructor(options) {
    super(options)
    this.webAuth = new auth0.WebAuth({
      domain:       `${process.env.REACT_APP_DOMAIN}`,
      clientID:     `${process.env.REACT_APP_CLIENT_ID}`
    })
  }
  render() {
    return (
      <div>
        Friends are displayed here.
      </div>
    )
  }
}

export default Friends
