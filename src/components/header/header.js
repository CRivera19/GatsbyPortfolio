import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, siteJob }) => (
  <div style={{
        background: `crimson`,
        paddingLeft: `0.5em`,
        borderBottom:`3px solid grey`,
    }}
  >
      <h1 style={{ paddingTop: `0.3em`, marginBottom:`0` ,}}>
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
