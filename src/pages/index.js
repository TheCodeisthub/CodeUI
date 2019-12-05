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

    <Cta />
  </Layout>
)

export default IndexPage
