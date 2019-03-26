import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

class ProgramsRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <ul className="programs-roll window-centered padding">
      {posts && (posts.map(({ node: post }, i) => (
          <li key={i}>
            <Link to={post.fields.slug}>
              <aside className="image">
                <figure>
                  <img src={post.frontmatter.background.childImageSharp.fluid.src} alt="background" />
                </figure>
              </aside>
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
    query ProgramsRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "programs" } }}
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
      <ProgramsRoll data={data} count={count} />
    )}
  />
)
