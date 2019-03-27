import React from 'react'
import PropTypes from 'prop-types'
import { EnrollmentTemplate } from '../../templates/enrollment'

const EnrollmentPreview = ({ entry, widgetFor }) => (
  <EnrollmentTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

EnrollmentPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EnrollmentPreview
