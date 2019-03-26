import React from 'react'

const SectionsList = ({
  items
}) => (
  <ul className="sections-list">
    {items.map((section, i) => (
      <li key={i}>
        <div className="section">
          <h2>{section.title}</h2>
          <p>{section.description}</p>
          <a href={section.link}>More</a>
        </div>
        {section.image ? (
          <img src={section.image.childImageSharp ? section.image.childImageSharp.fluid.src : section.image} alt="Section background" />
        ) : null}
      </li>
    ))}
  </ul>
)

export default SectionsList
