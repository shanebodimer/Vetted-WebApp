import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem } from 'reactstrap'

export default class SingleNavLink extends React.Component {
  render () {
    return (
      <NavItem className="custom-item" onClick={this.props.toggle}>
        <div className={`nav-item nav-link ${this.props.class}`}>
          <i className={`fal fa-fw fa-${this.props.icon}`} /> {this.props.title}
        </div>
      </NavItem>
    )
  }
}
