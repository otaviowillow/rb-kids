import React from 'react'
import { ProgramsTemplate } from '../../templates/programs'
import Layout from '../../components/Layout'

const ProgramsPreview = ({ entry, widgetFor, getAsset }) => {
  return (
    <Layout>
      <ProgramsTemplate
        title={entry.getIn(['data', 'title'])}
        background={getAsset(entry.getIn(['data', 'background']))}
        html={widgetFor('body')}
      />
    </Layout>
  )
}

export default ProgramsPreview
