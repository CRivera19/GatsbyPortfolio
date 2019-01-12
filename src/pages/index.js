import React from 'react'
import About from '../components/about'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <About />
    <h2>Employment</h2>
    <p>Currently looking for remote work.</p>
    <p><mark>Relocated in AZ,US</mark></p>

  </Layout>
)

export default IndexPage
