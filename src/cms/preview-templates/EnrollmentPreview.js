import React from 'react'
import { EnrollmentTemplate } from '../../templates/enrollment'

const EnrollmentPreview = ({ entry, widgetFor }) => {
  const entryFiles = entry.getIn(['data', 'files'])
  const files = entryFiles ? entryFiles.toJS() : []

  return (
    <EnrollmentTemplate
      title={entry.getIn(['data', 'title'])}
      fileDescription={entry.getIn(['data', 'fileDescription'])}
      files={files}
      content={widgetFor('body')}
    />
  )
}

export default EnrollmentPreview
