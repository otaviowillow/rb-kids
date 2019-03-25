import React from 'react'
import { LatestUpdatesTemplate } from '../../templates/latest-updates'

const LatestUpdatesPreview = ({ entry, widgetFor, getAsset }) => {
  return (
    <LatestUpdatesTemplate
      title={entry.getIn(['data', 'title'])}
      date={entry.getIn(['data', 'date'])}
      background={getAsset(entry.getIn(['data', 'background']))}
      content={widgetFor('body')}
    />
  )
}

export default LatestUpdatesPreview
