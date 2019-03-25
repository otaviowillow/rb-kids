import React from 'react'
import { graphql } from 'gatsby'

import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TemplateHeader from '../components/TemplateHeader'

export const LatestUpdatesTemplate = ({
  title,
  description,
  background,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <div className="latest-updates">
      <TemplateHeader title={title} background={background} />
      <div className="window-centered content">
        <PageContent className="content" content={content} />
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
        content={post.html}
        contentComponent={HTMLContent}
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
