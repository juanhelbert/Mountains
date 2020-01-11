import React from "react"

import Layout from "../components/layout"
import Images from "../components/images"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to <b>Mountains</b>, a Progressive Web App made with <a href="https://www.gatsbyjs.org" target='_blank'>Gatsby</a>.<br /> You can add it to your main screen and feel it like a real app!</p>
    <div>
      <Images />
    </div>
  </Layout>
)

export default IndexPage
