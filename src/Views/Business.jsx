import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap'

// Components
import BusinessB from '../Components/Business/Business.jsx'
import Footer from '../Components/Global/Footer/Footer.jsx'

export default class Business extends React.Component {
  render () {
    return (
      <div>
        <BusinessB />
        <Footer />
      </div>
    )
  }
}
