import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/contact'

const ContactPagePreview = ({ entry, widgetFor }) => (
  <ContactPageTemplate
    content={widgetFor('body')}
  />
)

export default ContactPagePreview
