import React from "react"
// import { Link } from "gatsby"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

// Headder
import BigTitle from "src/components/LandingPage/components/bigTitle.jsx"
import LandingHeader from "src/components/LandingPage/components/Header/LandingHeader"

// About
import About from "src/components/LandingPage/components/About/About"
import Skills from "src/components/LandingPage/components/Skills/Skills"
import Cta from "../components/CTA/Cta"
import Portfolio from "src/components/LandingPage/components/Portfolio/Portfolio"

// Skills
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <LandingHeader />

    <BigTitle />

    <About />

    <Skills />
    <Portfolio />
    <div className="hire--me--cta">
      <div className="container">
        <h2>Why Hire me?</h2>
        <p>
          Due to my interest in design, I am quick at learning and applying new
          information. Below are the three main areas that my key strengths lie
          in, as well as software skills. For a full breakdown, please refer to
          my LinkedIn or get in touch to view my CV.
        </p>
        <button className="btn btn--yellow">Hire me</button>
      </div>
    </div>
    <Cta />
  </Layout>
)

export default IndexPage
