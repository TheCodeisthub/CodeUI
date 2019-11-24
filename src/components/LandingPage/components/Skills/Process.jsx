import React from "react"
import UX from "src/images/ux.png"

export default function Process() {
  return (
    <div>
      <div className="process--text__container">
        <h2>UX Design Process</h2>
        <p>
          I apply the double diamond technique to all my UX design sprints. I
          believe that research and testing are key in delivering a successful
          project for the user. From quick, hand drawn sketches to MVP
          prototypes, my process involves developing the best solution to
          identified pain points through an iterative approach.
        </p>
      </div>

      <div className="ux--image__text--container">
        <h2>AGILE METHODOLOGY</h2>
        <div className="line"></div>
        <div className="UX--image__container">
          <img src={UX} alt="" />
        </div>
      </div>
    </div>
  )
}
