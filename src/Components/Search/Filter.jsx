import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap'

// Components
import SingleNavItem from '../Global/Navigation/SingleNavItem.jsx'

export default class Navigation extends React.Component {
  constructor (props) {
    super(props)

    // Set inital state
    this.state = {
      isOpen: false
    }

    // Bind state functions
    this.toggle = this.toggle.bind(this)
  }

  // Reverse open state
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <Navbar light className="navbar navbar-expand-md">

      </Navbar>
    )
  }
}
