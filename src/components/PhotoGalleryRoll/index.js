import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

class PhotoGalleryRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <ul className="photo-gallery-roll window-centered">
      {posts && (posts.map(({ node: post }) => (
          <li style={{ backgroundImage: `url(${post.frontmatter.gallery[0].image.childImageSharp.fluid.src})` }}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
              <p>{post.frontmatter.description}</p>
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
    query PhotoGalleryRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "photo-gallery" } }}
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
              date(formatString: "MMMM DD, YYYY")
              title
              description
              gallery {
                alt
                image {
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
    }
    `}
    render={(data, count) => (
      <PhotoGalleryRoll data={data} count={count} />
    )}
  />
)
