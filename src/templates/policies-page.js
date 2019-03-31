import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const PoliciesPageTemplate = ({
  title,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="window-centered content">
      <PageContent content={content} />
    </section>
  )
}

const PoliciesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PoliciesPageTemplate
        title={post.frontmatter.title}
        content={post.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

export default PoliciesPage

export const policiesPageQuery = graphql`
  query PoliciesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
