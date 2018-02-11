import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  InputGroup, InputGroupAddon, InputGroupText, Input
} from 'reactstrap'

// Components
import SingleNavItem from './SingleNavItem.jsx'
import SingleNavLink from './SingleNavLink.jsx'

import Search from '../Search/Search.jsx'

import Login from '../Auth/Login.jsx'
import Signup from '../Auth/Signup.jsx'
import Forgot from '../Auth/Forgot.jsx'

// Images
import logo from '../../../Images/icon.png'

export default class Navigation extends React.Component {
  constructor (props) {
    super(props)

    // Set inital state
    this.state = {
      isOpen: false,
      login: false,
      signup: false,
      forgot: false
    }

    // Bind state functions
    this.toggle = this.toggle.bind(this)
    this.modalLogin = this.modalLogin.bind(this)
    this.modalSignup = this.modalSignup.bind(this)
    this.modalForgot = this.modalForgot.bind(this)
  }

  // Reverse open state
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  // Login modal
  modalLogin (e) {
    // Prevent scroll
    this.state.login
      ? document.body.classList.remove('modal-open')
      : document.body.classList.add('modal-open')

    // Update state
    this.setState({
      login: !this.state.login
    })

    // Call other modals if needed
    if (e === 'forgot') this.modalForgot()
    if (e === 'signup') this.modalSignup()
  }

  // Signup modal
  modalSignup (e) {
    // Prevent scroll
    this.state.signup
      ? document.body.classList.remove('modal-open')
      : document.body.classList.add('modal-open')

    this.setState({
      signup: !this.state.signup
    })

    // Call other modals if needed
    if (e === 'login') this.modalLogin()
  }

  // Forgot modal
  modalForgot (e) {
    console.log('aye')
    // Prevent scroll
    this.state.forgot
      ? document.body.classList.remove('modal-open')
      : document.body.classList.add('modal-open')

    // Update state
    this.setState({
      forgot: !this.state.forgot
    })

    // Call other modals if needed
    if (e === 'login') this.modalLogin()
    if (e === 'signup') this.modalSignup()
  }

  render () {
    return (
      <Navbar light className="navbar navbar-expand-md">
        <div className="container-fluid">
          {/* Brand //////////////////////////////////////////////////////// */}
          <NavbarBrand
            tag={NavLink}
            to={'/'}
            className="custom-nav-brand d-flex justify-content-center"
          >
            <img src={logo} />
          </NavbarBrand>

          {/* Search /////////////////////////////////////////////////////// */}
          {/* As long as not on the homepage, show search */}
          {window.location.href !== 'https://vetted.springlaunch.com/#/' && (
            <Nav className="mr-auto" navbar>
              <Search size="sm" history={this.props.history} />
            </Nav>
          )
          }

          {/* Toggle /////////////////////////////////////////////////////// */}
          {/* Open: down, Closed: up */}
          <NavbarToggler className="ml-auto" onClick={this.toggle}>
            <i className={`far fa-sm fa-chevron-${this.state.isOpen ? 'up' : 'down'}`}></i>
          </NavbarToggler>

          {/* Items //////////////////////////////////////////////////////// */}
          <Collapse className="ml-auto" isOpen={this.state.isOpen} navbar>

            {/* Right ////////////////////////////////////////////////////// */}
            <Nav className="ml-auto" navbar>
              <SingleNavLink
                link={'https://chrome.google.com/webstore/category/extensions?hl=en'}
                title={'Get the extension'}
              />
              {/* <SingleNavLink
                link={'/signup'}
                title={'List your business'}
              />
              <SingleNavLink
                link={'/help'}
                title={'Help'}
              />
              <SingleNavItem
                toggle={this.modalSignup}
                title={'Sign up'}
              />
              <SingleNavItem
                toggle={this.modalLogin}
                title={'Login'}
              /> */}
            </Nav>
          </Collapse>
        </div>

        {/* Authentication views */}
        {this.state.login && <Login toggle={this.modalLogin}/>}
        {this.state.signup && <Signup toggle={this.modalSignup}/>}
        {this.state.forgot && <Forgot toggle={this.modalForgot}/>}

      </Navbar>
    )
  }
}
