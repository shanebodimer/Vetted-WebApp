import React from 'react'

// Components
import Skeleton from '../Global/Skeletons/Skeleton.jsx'

export default class Items extends React.Component {
  render () {
    return (
      <center>
        <div className="landing-hot-squeeze">
          <Skeleton count={3} />
          <Skeleton count={3} />
          <Skeleton count={3} />
        </div>
      </center>
    )
  }
}
