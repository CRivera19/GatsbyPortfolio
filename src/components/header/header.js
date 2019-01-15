import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, siteJob }) => (
  <div className="header">
      <h1 className="header__title">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h3 style={{ margin: 0, paddingBottom:`0.5em` }}>
      <Link 
        to="/"
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        {siteJob}
      </Link>
      </h3>
    </div>
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
