import React from "react"
import { Link } from "gatsby"


class Layout extends React.Component {
  render() {
    const { location, children, author } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <>
        <h1> <Link to= {`/`} >{ author}  </Link> </h1>
        <h2>Web Developer</h2>
        </>
      )
    } else {
      header = (
        <h3> <Link to={`/`} > {author} </Link> </h3>
      )
    }
    return (
      <div>
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
