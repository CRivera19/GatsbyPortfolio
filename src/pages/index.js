import React from 'react'
import Layout from '../components/layout'
import About from '../components/about'
import Employment from '../components/employment'
import Portfolio from '../components/Portfolio'
import Footer from '../components/footer'
import SEO from '../utils/seo'
import '../styles/styles.scss'
import '../utils/typography'

const IndexPage = () => (
  <Layout >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <About />
    <Employment />
    <Portfolio />
    <Footer />
  </Layout>
)

export default IndexPage
