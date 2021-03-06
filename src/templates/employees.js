import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import EmployeeCard from '../components/EmployeeCard'

export const EmployeesTemplate = ({
  name,
  avatar,
  backgroundPosition,
  role,
  phone,
  email,
  body
}) => (
  <EmployeeCard
    avatar={avatar}
    backgroundPosition={backgroundPosition}
    name={name}
    role={role}
    phone={phone}
    email={email}
    body={body}
  />
)

const Employees = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <EmployeesTemplate
        avatar={post.frontmatter.avatar.childImageSharp ? post.frontmatter.avatar.childImageSharp.fluid.src : post.frontmatter.avatar}
        backgroundPosition={post.frontmatter.backgroundPosition}
        role={post.frontmatter.role}
        name={post.frontmatter.title}
        phone={post.frontmatter.phone}
        email={post.frontmatter.email}
        body={post.html}
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
        name
        role
        phone
        email
        backgroundPosition
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
