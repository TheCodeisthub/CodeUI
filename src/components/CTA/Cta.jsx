import React, { Component } from "react"
import Form from "./Form"

export default class Cta extends Component {
  render() {
    return (
      <div className="container cta--container">
        <div className="contact--card">
          <p>Have any project in mind? Say Hello at</p>
          <h2>howdy.roosevelt@gmail.com</h2>
        </div>
        <p className="cta--p--title">Or Use the form below</p>
        <Form />
      </div>
    )
  }
}
