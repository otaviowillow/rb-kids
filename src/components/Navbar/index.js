import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhone, faChevronDown } from '@fortawesome/free-solid-svg-icons'

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
        <li><Link to='/'>Home</Link></li>
        <li>
          <span>About us <FontAwesomeIcon icon={faChevronDown} /></span>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
          </ul>
        </li>
        <li><Link to='/latest-updates'>Latest Updates</Link></li>
        <li>
          <span>Enrollment <FontAwesomeIcon icon={faChevronDown} /></span>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
          </ul>
        </li>
        <li><Link to='/photo-gallery'>Photo Gallery</Link></li>
        <li>
          <span>Programs</span>
        </li>
        <li>
          <span>Contact Us</span>
        </li>
      </ul>
    </nav>
  </header>
)

export default NavBar
