import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

import EmployeeCard from '../../components/EmployeeCard'

class EmployeesRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="latest-updates-roll window-centered padding">
        <h2>RB Kids Team</h2>
        <p>All staff at RB Kids have their Early Childhood  Education certification (or are currently enrolled in training) and experience in the early learning and care field. Additionally, many members also have Infant-Toddler, Special Needs or Montessori certification. They meet requirements outlined in the Child Care Facility Licensing Regulations, including having first aid certification and current criminal record clearance. Our staff are encouraged to continue their professional development and to be members of professional organizations, such as the Early Child hood Educators of BC, the BC Montessori Association and other relevant associations in the field of early learning and care. These opportunities connect our team with a community of colleagues and a wealth of information and research in the field.</p>
        <br />
        <p>As a program that is committed to high-quality care and learning experiences, we close for three professional development days per year. In addition, we have an annual closure for the last three business days of June so as to conduct facility maintenance and a Strategic Planning & In-Depth Professional Development Retreat.</p>
        <br />
        <p>Important Note:  We provide links to other websites, blogs and other places on the internet for information purposes only rbKids and/or Ritchie Bros. Auctioneers are not responsible for the content or views expressed on any of these.</p>
        <ul>
        {posts && (posts.map(({ node: post }, i) => (
            <EmployeeCard
              key={i}
              avatar={post.frontmatter.avatar.childImageSharp.fluid.src}
              name={post.frontmatter.name}
              role={post.frontmatter.role}
              phone={post.frontmatter.phone}
              email={post.frontmatter.email}
              body={post.html}
            />
          )))}
        </ul>
      </div>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
    query EmployeesRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        filter: { frontmatter: { templateKey: { eq: "employees" } }}
      ) {
        edges {
          node {
            html
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              name
              role
              phone
              email
              avatar {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
    `}
    render={(data, count) => (
      <EmployeesRoll data={data} count={count} />
    )}
  />
)
