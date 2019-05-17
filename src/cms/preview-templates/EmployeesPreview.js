import React from 'react'
import { EmployeesTemplate } from '../../templates/employees'

const EmployeesPreview = ({ entry, widgetFor, getAsset }) => {
  return (
    <EmployeesTemplate
      name={entry.getIn(['data', 'name'])}
      avatar={getAsset(entry.getIn(['data', 'avatar']))}
      backgroundPosition={entry.getIn(['data', 'backgroundPosition'])}
      role={entry.getIn(['data', 'role'])}
      phone={entry.getIn(['data', 'phone'])}
      email={entry.getIn(['data', 'email'])}
      sort={entry.getIn(['data', 'email'])}
      body={entry.getIn(['data', 'body'])}
    />
  )
}

export default EmployeesPreview
