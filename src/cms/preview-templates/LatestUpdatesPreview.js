import React from 'react'
import { LatestUpdateTemplate } from '../../templates/latest-updates'

const LatestUpdatePreview = ({ entry, getAsset }) => {
  return (
    <LatestUpdateTemplate
      title={entry.getIn(['data', 'title'])}
      date={entry.getIn(['data', 'date'])}
      background={entry.getAsset(['data', 'background'])}
      html={widgetFor('body')}
    />
  )
}

export default LatestUpdatePreview
