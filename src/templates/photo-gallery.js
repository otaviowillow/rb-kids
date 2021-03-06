import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const PhotoElement = ({
  item
}) => {
  const [modal, showModal] = useState(false);

  return (
    <li>
      <img
        src={item.image.childImageSharp ? item.image.childImageSharp.fluid.src : item.image}
        className={modal ? 'img modal' : 'img'}
        alt='Gallery item'
        onClick={() => showModal(true)}
      />
      <div className="background" hidden={!modal} onClick={() => showModal(!modal)} />
    </li>
  )
}

export const PhotoGalleryTemplate = ({
  title,
  description,
  gallery
}) => {
  return (
    <div className="photo-gallery">
      <header className="margin">
        <div className="window-centered">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </header>
      <div className="window-centered">
        <ul>
          {gallery.map((item, i) => (
            item.image ? <PhotoElement item={item}  /> : <li></li>
          ))}
        </ul>
      </div>
    </div>
  )
}


const PhotoGallery = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PhotoGalleryTemplate
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        gallery={post.frontmatter.gallery}
      />
    </Layout>
  )
}

export default PhotoGallery

export const pageQuery = graphql`
  query PhotoGalleryByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        gallery {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
