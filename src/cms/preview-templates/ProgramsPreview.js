import React from 'react'
import { ProgramsTemplate } from '../../templates/programs'

const ProgramsPreview = ({ entry, widgetFor, getAsset }) => {
  return (
    <ProgramsTemplate
      title={entry.getIn(['data', 'title'])}
      background={getAsset(entry.getIn(['data', 'background']))}
      backgroundPosition={entry.getIn(['data', 'backgroundPosition'])}
      content={widgetFor('body')}
    />
  )
}

export default ProgramsPreview
