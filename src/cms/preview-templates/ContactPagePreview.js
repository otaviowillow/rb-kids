import React from 'react'
import PropTypes from 'prop-types'
import { ContentTemplate } from '../../templates/contact'

const ContactPagePreview = ({ entry, widgetFor }) => (
  <ContentTemplate
    content={widgetFor('body')}
  />
)

export default ContactPagePreview
