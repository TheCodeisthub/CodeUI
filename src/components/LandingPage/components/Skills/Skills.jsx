import React, { Component } from "react"
import TitleAndDescription from "./TitleAndDescription"
import Cards from "./Cards"
import Process from "./Process"

export default class Skills extends Component {
  render() {
    return (
      <div className="skills__container">
        <div className="container">
          <TitleAndDescription />
          <Cards />
          <Process />
        </div>
      </div>
    )
  }
}
