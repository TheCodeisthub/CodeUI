/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "src/sass/layout.scss"
import topzigzag from "src/images/topzigzag.svg"
import bottomzigzag from "src/images/bottomzag.svg"

// Social Icons
import twitter from "src/images/twitter.svg"
import instagram from "src/images/instagram.svg"
import linkedin from "src/images/linkedin.svg"
import github from "src/images/github.svg"
import dribble from "src/images/dribble.svg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="body__container">
        <main>{children}</main>
        <footer>
          <div className="footer__container">
            <img className="zag--one" src={topzigzag} />
            <img className="zag--two" src={bottomzigzag} />
            <h2>STAY UPDATED</h2>
            <div className="footer--social__container">
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
              <img src={linkedin} alt="" />
              <img src={dribble} alt="" />
              <img src={github} alt="" />
            </div>
            <div className="footer--credits">
              <p>
                © {new Date().getFullYear()}, Built with {""}
                <a href="https://www.gatsbyjs.org">Gatsby</a> | Developed by{" "}
                <strong>Roosevelt</strong>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
