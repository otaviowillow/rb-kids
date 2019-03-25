import React from 'react'
import { ProgramsTemplate } from '../../templates/programs'

const ProgramsPreview = ({ entry, widgetFor, getAsset }) => {
  return (
    <ProgramsTemplate
      title={entry.getIn(['data', 'title'])}
      background={getAsset(entry.getIn(['data', 'background']))}
      html={widgetFor('body')}
    />
  )
}

export default ProgramsPreview
