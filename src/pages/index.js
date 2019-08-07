import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import About from "../components/about";
import Projects from "../components/projects";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../components/style.css";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteAuthor = data.site.siteMetadata.author;

    return (
      <Layout location={this.props.location} author={siteAuthor}>
        <SEO title="All posts" />
        <Bio />
        <About />
        <Projects />
        <Link to="/blog/">
          <p>Blog</p>
        </Link>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
