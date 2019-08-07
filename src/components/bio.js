/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  return (
    <div id="bio">
      <Image
        fluid={data.avatar.childImageSharp.fluid}
        alt={author}
        style={{
          marginBottom: 0,
          maxWidth: 100,
          borderRadius: `100%`,
          border: "green solid 3px"
        }}
        imgStyle={{
          borderRadius: `50%`
        }}
      />
      <h1>{author}</h1>
      <div id="summary">
        <strong>Web developer</strong> currently studying Javascript, React, and
        Gatsby. I am 26, born and raised in California currently living in Mesa,
        Arizona.
      </div>
    </div>
  );
};

export default Bio;
