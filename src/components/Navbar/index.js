import React, { Fragment, Component } from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhone, faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons'

import rbKids from '../../img/rb-kids-logo.gif'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    const onChange = value => this.setState({ isOpen: !this.state.isOpen });

    return (
      <Fragment>
        <header className="navbar">
          <div className="top">
            <nav className="window-centered">
              <h5><FontAwesomeIcon icon={faMapMarkerAlt} /> 9500 Glenlyon Parkway</h5>
              <ul>
                <li><a href="mailto:rbkids@rbauction.com"><FontAwesomeIcon icon={faEnvelope} /> rbkids@rbauction.com</a></li>
                <li><FontAwesomeIcon icon={faPhone} /> 778-331-5532</li>
              </ul>
            </nav>
          </div>
          <nav className="bottom window-centered">
            <h1><Link to='/'><img src={rbKids} alt="RB Kids - logo" /></Link></h1>
            <ul className={this.state.isOpen ? 'menu show' : 'menu'}>
              <li>
                <Link to='/about'>About us <FontAwesomeIcon icon={faChevronDown} /></Link>
                <ul>
                  <li><Link to='/about'>History & Philosophy</Link></li>
                  <li><Link to='/employees'>Our Staff</Link></li>
                </ul>
              </li>
              <li><Link to='/latest-updates'>Latest Updates</Link></li>
              <li>
                <Link to='/enrollment'>Enrollment <FontAwesomeIcon icon={faChevronDown} /></Link>
                <ul>
                  <li><Link to='/enrollment/rba-employee'>RBA Employees</Link></li>
                  <li><Link to='/enrollment/community-children'>Community Children</Link></li>
                </ul>
              </li>
              <li><Link to='/photo-gallery'>Photo Gallery</Link></li>
              <li><Link to='/programs'>Programs</Link></li>
              <li><Link to='/policies'>Policies/Procedures & Parent information</Link></li>
              <li><Link to='/contact'>Contact us</Link></li>
            </ul>
            <h3 onClick={() => onChange()}><FontAwesomeIcon icon={faBars} /></h3>
          </nav>
        </header>
        <div className={this.state.isOpen ? 'close-black show' : 'close-black'} onClick={() => onChange()} />
        <div className="spacing-bottom" />
      </Fragment>
    )
  }
}

export default NavBar
