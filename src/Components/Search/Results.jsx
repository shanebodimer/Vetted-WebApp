import React from 'react'

// Components
import Skeleton from '../Global/Skeletons/Skeleton.jsx'

// Utilities
import { getUrlParam } from '../../Utilities/helpers.jsx'

export default class Results extends React.Component {
  constructor (props) {
    super(props)

    // Set inital query
    var query = getUrlParam().query ? decodeURIComponent(getUrlParam().query) : ''

    // Set initial state
    this.state = {
      query: query,
      count: 5
    }
  }

  render () {
    return (
      <div className="container-fluid">
        <Skeleton count={5} />
        <Skeleton count={5} classProp="d-none d-md-block d-lg-block d-xl-block" />
      </div>
    )
  }
}
