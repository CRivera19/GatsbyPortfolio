import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout >
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <div style={{ maxWidth: `150px`, marginBottom: `1.45rem`, display:`inline-flex`, }}>
    <h2>About</h2>
      <Image />
    </div>
    <p>My name is <mark><b>Christopher Rivera</b></mark> and I am <mark><b>Web Developer</b></mark> . I study Front-End and React. I am currently studying OOP, ES6, and Node.js to become a Full Stack developer. </p>
    <h2>Employment</h2>
    <p>Currently looking for remote work.</p>
    <p><mark>Relocated in AZ,US</mark></p>

  </Layout>
)

export default IndexPage
