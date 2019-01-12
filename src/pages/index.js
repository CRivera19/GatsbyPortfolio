import React from 'react'
import About from '../components/about'
import Work from '../components/work'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <About />
    <Work />
  </Layout>
)

export default IndexPage
