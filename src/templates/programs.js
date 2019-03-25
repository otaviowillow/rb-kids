import React from 'react'
import { graphql } from 'gatsby'

import { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TemplateHeader from '../components/TemplateHeader'

export const ProgramsTemplate = ({
  title,
  description,
  background,
  html
}) => (
  <div className="programs margin">
    <TemplateHeader title={title} background={background} />
    <div className="window-centered content">
      <HTMLContent content={html} noPadding />
    </div>
  </div>
)

const Programs = ({ data }) => {
  const { markdownRemark: post } = data

  console.log(post);

  return (
    <Layout>
      <ProgramsTemplate
        title={post.frontmatter.title}
        background={post.frontmatter.background.childImageSharp ? post.frontmatter.background.childImageSharp.fluid.src : post.frontmatter.background}
        html={post.html}
      />
    </Layout>
  )
}

export default Programs

export const pageQuery = graphql`
  query ProgramsByID($id: String!) {
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
