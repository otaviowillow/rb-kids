import React from 'react'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getIn }) => {
  const entryHero = entry.getIn(['data', 'hero'])
  const hero = entryHero ? entryHero.toJS() : []

  const entrySections = entry.getIn(['data', 'sections'])
  const sections = entrySections ? entrySections.toJS() : []

  const entryPrograms = entry.getIn(['data', 'programs'])
  const programs = entryPrograms ? entryPrograms.toJS() : []

  return (
    <IndexPageTemplate
      hero={hero}
      sections={sections}
      programs={{
        mission: entry.getIn(['data', 'mission']),
        programs: programs
      }}
    />
  )
}

export default IndexPagePreview
