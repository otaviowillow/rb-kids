import React from 'react'
import { LatestUpdateTemplate } from '../../templates/latest-updates'
import Layout from '../../components/Layout'

const LatestUpdatePreview = ({ entry, getAsset }) => {
  return (
    <Layout>
      <LatestUpdateTemplate
        title={entry.getIn(['data', 'title'])}
        date={entry.getIn(['data', 'date'])}
        background={entry.getAsset(['data', 'background'])}
        html={widgetFor('body')}
      />
    </Layout>
  )
}

export default LatestUpdatePreview
