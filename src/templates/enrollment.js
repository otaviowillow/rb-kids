import React from 'react'
import { graphql } from 'gatsby'

import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Pdfs from '../components/Pdfs'

export const EnrollmentTemplate = ({
  title,
  files,
  fileDescription,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <div className="enrollment">
      <div className="window-centered content">
        <PageContent className="aside" content={content} />
        <Pdfs files={files} fileDescription={fileDescription} />
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
        fileDescription={post.frontmatter.fileDescription}
        files={post.frontmatter.files}
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
        fileDescription
        files {
          name
          pdf {
            absolutePath
            size
          }
        }
      }
    }
  }
`
