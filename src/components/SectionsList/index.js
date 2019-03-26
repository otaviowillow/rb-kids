import React from 'react'
import { Link } from 'gatsby'

const SectionsList = ({
  items
}) => (
  <ul className="sections-list">
    {items.map((section, i) => (
      <li key={i}>
        <div className="section">
          <h2>{section.title}</h2>
          <p>{section.description}</p>
          <Link to={section.link}>More</Link>
        </div>
        {section.image ? (
          <img src={section.image.childImageSharp ? section.image.childImageSharp.fluid.src : section.image} alt="Section background" />
        ) : null}
      </li>
    ))}
  </ul>
)

export default SectionsList
