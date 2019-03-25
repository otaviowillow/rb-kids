import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhone, faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons'

import rbKids from '../../img/rb-kids-logo.gif'

const NavBar = () => (
  <header className="navbar">
    <div className="top">
      <nav className="window-centered">
        <h5><FontAwesomeIcon icon={faMapMarkerAlt} /> 9500 Glenlyon Parkway</h5>
        <ul>
          <li><FontAwesomeIcon icon={faEnvelope} /> asd@asdasd.asd</li>
          <li><FontAwesomeIcon icon={faPhone} /> 555-555-5555</li>
        </ul>
      </nav>
    </div>
    <nav className="bottom window-centered">
      <h1><Link to='/'><img src={rbKids} alt="RB Kids - logo" /></Link></h1>
      <ul className="menu">
        {/* <li><Link to='/'>Home</Link></li> */}
        <li>
          <Link to='/about'>About us <FontAwesomeIcon icon={faChevronDown} /></Link>
          <ul>
            <li><Link to='/about'>History & Philosophy</Link></li>
            <li><Link to='/employees'>Our Staff</Link></li>
          </ul>
        </li>
        <li><Link to='/latest-updates'>Latest Updates</Link></li>
        <li><Link to='/enrollment'>Enrollment</Link></li>
        <li><Link to='/photo-gallery'>Photo Gallery</Link></li>
        <li><Link to='/programs'>Programs</Link></li>
        <li><Link to='/contact'>Contact us</Link></li>
      </ul>
      <h3><FontAwesomeIcon icon={faBars} /></h3>
    </nav>
  </header>
)

export default NavBar
