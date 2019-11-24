import React from "react"
import RightBg from "./RightBg"
import LeftHeaderText from "./LeftHeaderText"

export default function LandingHeader() {
  return (
    <div className="container">
      <div className="header--container">
        <LeftHeaderText />
        <RightBg />
      </div>
    </div>
  )
}
