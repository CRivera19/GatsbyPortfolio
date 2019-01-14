import React from 'react'
import About from '../components/about/about'
import Employment from '../components/employment/employment'
import Portfolio from '../components/Portfolio/portfolio'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <About />
    <Employment />
    <Portfolio />

  </Layout>
)

export default IndexPage
