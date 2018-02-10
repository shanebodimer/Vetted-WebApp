import React from 'react'

// Components
import SkeletonListing from './SkeletonListing.jsx'
import SkeletonTitle from './SkeletonTitle.jsx'

export default class Listing extends React.Component {
  render () {
    return (
      <div className={this.props.classProp}>
        <SkeletonTitle />
        <div className="row">
          {this.props.count >= 1 && <SkeletonListing /> }
          {this.props.count >= 2 && <SkeletonListing /> }
          {this.props.count >= 3 && <SkeletonListing classProp="d-none d-xl-block" /> }
          {this.props.count >= 4 && <SkeletonListing classProp="d-none d-lg-block d-xl-block" /> }
          {this.props.count >= 5 && <SkeletonListing classProp="d-none d-md-block d-lg-block d-xl-block" /> }
        </div>
      </div>
    )
  }
}
