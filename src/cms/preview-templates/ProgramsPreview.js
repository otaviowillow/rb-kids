import React from 'react'
import { ProgramsTemplate } from '../../templates/programs'
import Layout from '../../components/Layout'

const ProgramsPreview = ({ entry, widgetFor, getAsset }) => {
  return (
    <Layout>
      <ProgramsTemplate
        title={entry.getIn(['data', 'title'])}
        background={entry.getAsset(['data', 'background'])}
        html={widgetFor('body')}
      />
    </Layout>
  )
}

export default ProgramsPreview
