import React from "react"
import Dots from "src/images/white_dots.svg"

export default function LeftBg() {
  return (
    <div>
      <div className="right--about--bg">
        <div className="right--yellow--cliper"></div>
        <img className="about--dots" src={Dots} alt="" />
      </div>
    </div>
  )
}
