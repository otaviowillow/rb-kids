import React from 'react'
import { ProgramsTemplate } from '../../templates/programs'

const ProgramsPreview = ({ entry, getAsset }) => {
  return (
    <ProgramsTemplate
      title={entry.getIn(['data', 'title'])}
      background={entry.getAsset(['data', 'background'])}
      html={widgetFor('body')}
    />
  )
}

export default ProgramsPreview
