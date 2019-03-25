import React from 'react'
import { graphql } from 'gatsby'

import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TemplateHeader from '../components/TemplateHeader'

export const ProgramsTemplate = ({
  title,
  description,
  background,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content
  
  return (
    <div className="programs margin">
      <TemplateHeader title={title} background={background} />
      <div className="window-centered content">
        <PageContent className="content" content={content} />
      </div>
    </div>
  )
}

const Programs = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ProgramsTemplate
        title={post.frontmatter.title}
        background={post.frontmatter.background.childImageSharp ? post.frontmatter.background.childImageSharp.fluid.src : post.frontmatter.background}
        content={post.html}
        contentComponent={HTMLContent}
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
