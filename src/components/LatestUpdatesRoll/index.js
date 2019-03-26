import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

class LatestUpdatesRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <ul className="latest-updates-roll window-centered padding">
      {posts && (posts.map(({ node: post }) => (
          <li>
            <Link to={post.fields.slug}>
              <img src={post.frontmatter.background.childImageSharp.fluid.src} alt="background" />
              <aside>
                <h2>{post.frontmatter.title}</h2>
                <p>{post.excerpt}</p>
              </aside>
            </Link>
          </li>
        )))}
      </ul>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
    query LatestUpdatesRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "latest-updates" } }}
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              title
              description
              background {
                childImageSharp {
                  fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
    `}
    render={(data, count) => (
      <LatestUpdatesRoll data={data} count={count} />
    )}
  />
)
