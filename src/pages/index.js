import React from 'react'
import About from '../components/about/about'
import Employment from '../components/employment/employment'
import Portfolio from '../components/Portfolio/portfolio'
import Layout from '../components/layout/layout'
import Footer from '../components/footer/footer'
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
