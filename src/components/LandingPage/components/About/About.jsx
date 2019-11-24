import React, { Component } from "react"
import LeftBg from "./LeftBg"
import RightText from "./RightText"

export default class About extends Component {
  render() {
    return (
      <div className="about--container">
        <LeftBg />
        <RightText />
      </div>
    )
  }
}
