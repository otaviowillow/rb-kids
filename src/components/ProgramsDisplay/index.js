import React from 'react'
import { Link } from 'gatsby'

const ProgramsDisplay = ({
  items
}) => (
  <div className="programs-display window-centered">
    <h2>{items.mission}</h2>
    <ul>
      {items.programs.map((program, i) => (
        <li key={i}>
          <header>
            <h5>Programs for</h5>
            <h3 style={{ color: program.color }}>{program.title}</h3>
          </header>
          <p>{program.description}</p>
          <Link to={program.link} style={{ color: program.color }}>Read More</Link>
        </li>
      ))}
    </ul>
  </div>
)

export default ProgramsDisplay
