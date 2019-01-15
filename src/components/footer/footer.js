




import React from 'react'
import './footer.css'

const Footer = () => (
  <footer className="footer">
  © {new Date().getFullYear()}, Built with
  {` `}
  <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer
