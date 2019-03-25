import React from 'react'
import { EmployeesTemplate } from '../../templates/employees'

const EmployeesPreview = ({ entry, widgetFor, getAsset }) => {
  return (
    <EmployeesTemplate
      name={entry.getIn(['data', 'name'])}
      avatar={getAsset(entry.getIn(['data', 'avatar']))}
      role={entry.getIn(['data', 'role'])}
      phone={entry.getIn(['data', 'phone'])}
      email={entry.getIn(['data', 'email'])}
      body={widgetFor('body')}
    />
  )
}

export default EmployeesPreview
