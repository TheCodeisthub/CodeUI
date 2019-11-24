import React, { Component } from "react"
import img from "src/images/recipe.png"

export default class PortfolioCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="portfolio--card__container">
          <div className="portfolio--card--img__container">
            <img src={img} width="601px" alt="Portfolio" />
          </div>
          <div className="portfolio--card--text">
            <h2>Recipe Web App</h2>
            <p>Recipe is made for users to select a meal to prepare</p>
          </div>
        </div>
      </div>
    )
  }
}
