import React from 'react'
import { graphql } from 'gatsby'

import { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TemplateHeader from '../components/TemplateHeader'

export const LatestUpdatesTemplate = ({
  title,
  description,
  background,
  html
}) => {
  console.log('HTML', html)

  return (
    <div className="latest-updates">
      <TemplateHeader title={title} background={background} />
      <div className="window-centered content">
        <HTMLContent content={html} />
      </div>
    </div>
  )
}

const LatestUpdates = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <LatestUpdatesTemplate
        title={post.frontmatter.title}
        background={post.frontmatter.background.childImageSharp ? post.frontmatter.background.childImageSharp.fluid.src : post.frontmatter.background}
        html={post.html}
      />
    </Layout>
  )
}

export default LatestUpdates

export const pageQuery = graphql`
  query LatestUpdatesByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
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
`
