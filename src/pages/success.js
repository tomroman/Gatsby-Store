import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>You bought a thing!</h1>
    <p>thank you for your purchase</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
