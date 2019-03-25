import React from 'react'
import { LatestUpdatesTemplate } from '../../templates/latest-updates'
import Layout from '../../components/Layout'

const LatestUpdatesPreview = ({ entry, widgetFor, getAsset }) => {
  return (
    <Layout>
      <LatestUpdatesTemplate
        title={entry.getIn(['data', 'title'])}
        date={entry.getIn(['data', 'date'])}
        background={getAsset(entry.getIn(['data', 'background']))}
        html={widgetFor('body')}
      />
    </Layout>
  )
}

export default LatestUpdatesPreview
