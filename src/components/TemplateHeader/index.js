import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

const TemplateHeader = ({
  background,
  title,
  date,
  author
}) => (
  <header className="template-header" style={{ backgroundImage: `url(${background})` }}>
    <div className="window-centered">
      <h2>{title}</h2>
      <ul className="details-card">
        {date ? <li><FontAwesomeIcon icon={faCalendar} /> {date}</li> : null}
        {author ? <li>{author}</li> : null}
      </ul>
    </div>
  </header>
)

export default TemplateHeader
