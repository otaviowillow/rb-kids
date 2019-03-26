import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ProgramsDisplay from '../components/ProgramsDisplay'
import SectionsList from '../components/SectionsList'
import Map from '../components/Map'

export const IndexPageTemplate = ({
  hero,
  programs,
  sections
}) => (
  <Fragment>
    <Hero items={hero} />
    <ProgramsDisplay items={programs} />
    <SectionsList items={sections} />
    <Map
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA4abwXM9G_iVwESpU_QprIKOkRAgwGgbU&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </Fragment>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <IndexPageTemplate
        hero={frontmatter.hero}
        sections={frontmatter.sections}
        programs={{
          mission: frontmatter.mission,
          programs: frontmatter.programs
        }}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        hero {
          title
          subtitle
          description
          link
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        mission
        programs {
          title
          description
          link
          color
        }
        sections {
          title
          description
          link
          image {
            childImageSharp {
              fluid(maxWidth: 948, quality: 75) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
