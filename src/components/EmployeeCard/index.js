import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

import { HTMLContent } from '../../components/Content'

const EmployeeCard = ({
  avatar,
  backgroundPosition,
  name,
  role,
  email,
  phone,
  body
}) => (
  <li className="employee-card">
    <div className="avatar-wrapper">
      <figure className="avatar" style={{
        backgroundImage: `url(${avatar})`,
        backgroundPosition: `${backgroundPosition} center`
      }} />
      {/* <figure className="avatar">
        <img src={avatar} alt="avatar" />
      </figure> */}
    </div>
    <aside>
      <h3>{name}</h3>
      <h4>{role}</h4>
      <ul className="details-card">
        {email ? <li><FontAwesomeIcon icon={faEnvelope} /> {email}</li> : null}
        {phone ? <li><FontAwesomeIcon icon={faPhone} /> {phone}</li> : null}
      </ul>
      <HTMLContent content={body} />
    </aside>
  </li>
)

export default EmployeeCard
