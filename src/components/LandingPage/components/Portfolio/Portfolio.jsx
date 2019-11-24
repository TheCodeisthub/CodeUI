import React, { Component } from "react"
import PortfolioCard from "./PortfolioCard"
import PortfolioText from "./PortfolioText"

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio--container">
        <PortfolioText />
        <PortfolioCard />
      </div>
    )
  }
}
