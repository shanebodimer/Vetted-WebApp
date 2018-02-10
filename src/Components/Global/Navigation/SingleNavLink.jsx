import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem } from 'reactstrap'

export default class SingleNavLink extends React.Component {
  render () {
    return (
      <NavItem>
        <NavLink
          exact
          className={`nav-item nav-link ${this.props.class}`}
          activeClassName="active"
          to={this.props.link}
        >
          <i className={`fal fa-fw fa-${this.props.icon}`} /> {this.props.title}
        </NavLink>
      </NavItem>
    )
  }
}
