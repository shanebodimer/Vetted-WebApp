import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem } from 'reactstrap'

export default class SingleNavLink extends React.Component {
  render () {
    return (
      <NavItem>
        <a
          target="blank"
          exact
          className={`no-link nav-item nav-link ${this.props.class}`}
          activeClassName="active"
          href={this.props.link}
        >
          <i className={`fal fa-fw fa-${this.props.icon}`} /> {this.props.title}
        </a>
      </NavItem>
    )
  }
}
