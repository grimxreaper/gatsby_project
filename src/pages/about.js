import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About the Developer</h1>
      <p>She is an artist who grew up in Rjekyavik, Iceland.</p>
      <p>An advocate against whale hunting, and an avid free-diver.</p>
      <p>
        Need a developer? <Link to="/contact">Contact her here!</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
