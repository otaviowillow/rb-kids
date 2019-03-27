import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const EnrollmentPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="window-centered content">
      <PageContent content={content} />
    </section>
  )
}

const EnrollmentPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <EnrollmentPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

export default EnrollmentPage

export const EnrollmentPageQuery = graphql`
  query EnrollmentPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
