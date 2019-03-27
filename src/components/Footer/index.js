import React, { Fragment } from 'react'

import rbLogo from '../../img/rba-logo.png'

const Footer = ({
  featured
}) => (
  <Fragment>
    <div className="footer">
      <figure>
        <img src={rbLogo} alt="RB brand" />
      </figure>
      <span>© Copyright © 2019 Ritchie Bros. All Rights Reserved.</span>
    </div>
    <div className="fake-footer"></div>
  </Fragment>
)

export default Footer
