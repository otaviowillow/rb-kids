import React from 'react'

import rbLogo from '../../img/rba-logo.png'

const Footer = ({
  featured
}) => (
  <div className="footer">
    <figure>
      <img src={rbLogo} />
    </figure>
    <span>© Copyright © 2019 Ritchie Bros. All Rights Reserved.</span>
  </div>
)

export default Footer
