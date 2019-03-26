import React from 'react'
import Moment from 'react-moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faAt } from '@fortawesome/free-solid-svg-icons'

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
        {author ? <li><FontAwesomeIcon icon={faAt} /> {author}</li> : null}
        {date ? <li><FontAwesomeIcon icon={faCalendar} /> <Moment format="D MMM YYYY">{date}</Moment></li> : null}
      </ul>
    </div>
  </header>
)

export default TemplateHeader
