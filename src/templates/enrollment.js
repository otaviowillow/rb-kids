import React from 'react'
import { graphql } from 'gatsby'

import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'

export const EnrollmentTemplate = ({
  title,
  description,
  background,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <div className="enrollment">
      <div className="window-centered content">
        <PageContent content={content} />
      </div>
    </div>
  )
}

const Enrollment = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <EnrollmentTemplate
        title={post.frontmatter.title}
        content={post.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

export default Enrollment

export const pageQuery = graphql`
  query EnrollmentByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`
