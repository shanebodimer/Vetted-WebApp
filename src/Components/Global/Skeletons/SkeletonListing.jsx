import React from 'react'

export default class Listing extends React.Component {
  render () {
    return (
      <div className={`col-md ${this.props.classProp}`}>
        <div className="skeleton-img skeleton-animate" />
        <div className="skeleton-subtitle skeleton-animate" />
        <div className="skeleton-subtitle-sm skeleton-animate" />
      </div>
    )
  }
}
