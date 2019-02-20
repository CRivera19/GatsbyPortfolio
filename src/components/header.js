import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, siteJob }) => (
  <nav className="header">
      <h1><Link to="/">{siteTitle}</Link></h1>
      <h3><Link to="/">{siteJob}</Link></h3>
  </nav>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
  siteJob: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: ``,
  siteJob: ``,
}
export default Header
