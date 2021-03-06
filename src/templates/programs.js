import React from 'react'
import { graphql } from 'gatsby'

import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TemplateHeader from '../components/TemplateHeader'

export const ProgramsTemplate = ({
  title,
  description,
  background,
  backgroundPosition,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <div className="programs">
      <TemplateHeader title={title} background={background} backgroundPosition={backgroundPosition} />
      <div className="window-centered update-content">
        <PageContent content={content} />
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
        backgroundPosition={post.frontmatter.backgroundPosition}
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
        backgroundPosition
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
