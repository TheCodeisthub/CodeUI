import React from "react"
import Logo from "src/images/logo.svg"
import { Link } from "gatsby"

export default function Header() {
  return (
    <div>
      <nav className="container">
        <div className="nav--dark--bg">
          <ul className="nav--lists">
            <li>
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Skills</Link>
            </li>
            <li>
              <Link to="/">Portfolio</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
