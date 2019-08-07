import React from "react";
import { Link } from "gatsby";

class Layout extends React.Component {
  render() {
    const { location, children, author } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <>
          <nav>{/* <h1>{ author }</h1>
        <h3>Web Developer</h3> */}</nav>
        </>
      );
    } else {
      header = (
        <>
          <nav>
            <h3>
              {" "}
              <Link to={`/`}> {author} </Link>{" "}
            </h3>
          </nav>
        </>
      );
    }
    return (
      <div id="layout">
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          <p>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default Layout;
