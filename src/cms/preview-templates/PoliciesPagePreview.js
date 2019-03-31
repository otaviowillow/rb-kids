import React from 'react'
import PropTypes from 'prop-types'
import { PoliciesPageTemplate } from '../../templates/policies-page'

const PoliciesPagePreview = ({ entry, widgetFor }) => (
  <PoliciesPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

PoliciesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PoliciesPagePreview
