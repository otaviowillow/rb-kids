import React from 'react'

const TemplateHeader = ({ background, title }) => (
  <header className="template-header" style={{ backgroundImage: `url(${background})` }}>
    <div className="window-centered">
      <h2>{title}</h2>
    </div>
  </header>
)

export default TemplateHeader
