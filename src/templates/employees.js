import React from 'react'
import { graphql } from 'gatsby'

import { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TemplateHeader from '../components/TemplateHeader'

export const EmployeesTemplate = ({
  title,
  avatar,
  html
}) => (
  <div className="latest-updates">
    <TemplateHeader title={title} background={avatar} />
    <div className="window-centered content">
      <HTMLContent content={html} />
    </div>
  </div>
)

const Employees = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <EmployeesTemplate
        title={post.frontmatter.title}
        avatar={post.frontmatter.avatar.childImageSharp ? post.frontmatter.avatar.childImageSharp.fluid.src : post.frontmatter.avatar}
        html={post.html}
      />
    </Layout>
  )
}

export default Employees

export const pageQuery = graphql`
  query EmployeesByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        avatar {
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
