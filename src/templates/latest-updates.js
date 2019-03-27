import React from 'react'
import { graphql } from 'gatsby'

import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TemplateHeader from '../components/TemplateHeader'

export const LatestUpdatesTemplate = ({
  title,
  date,
  author,
  description,
  background,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <div className="latest-updates">
      <TemplateHeader
        background={background}
        title={title}
        date={date}
        author={author}
      />
      <div className="window-centered">
        <PageContent content={content} />
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
        date={post.frontmatter.date}
        author={post.frontmatter.author}
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
        date
        author
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
