import React from "react"

import TopDot from "src/images/top_dots.svg"
import BottomDot from "src/images/bottom_dots.svg"

export default function RightBg() {
  return (
    <div>
      <div className="left--header--bg">
        <svg
          width="190"
          height="36"
          viewBox="0 0 190 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1.5L24.5 25L48 1.5L71.5 25L95 1.5L118.5 25L142 1.5L165.5 25L189 1.5"
            stroke="black"
          />
          <path
            d="M1 11.5L24.5 35L48 11.5L71.5 35L95 11.5L118.5 35L142 11.5L165.5 35L189 11.5"
            stroke="black"
          />
        </svg>

        <img className="top--dots" src={TopDot} alt="" />

        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3.18898"
            y="4.91739"
            width="25"
            height="25"
            transform="rotate(-4.47078 3.18898 4.91739)"
            stroke="#F8C615"
            stroke-width="5"
          />
        </svg>

        <div className="yello--bg--cliper"></div>

        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.5 4.5L4 27M4 4.5L26.5 27"
            stroke="#F8C615"
            stroke-width="8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <img className="bottom--dots" src={BottomDot} alt="" />
      </div>
    </div>
  )
}
