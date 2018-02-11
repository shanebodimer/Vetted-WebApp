import React from 'react'

// Components
import Skeleton from '../Global/Skeletons/Skeleton.jsx'
import ResultContainer from './ResultContainer.jsx'

// Utilities
import { getUrlParam } from '../../Utilities/helpers.jsx'
import { search } from '../../Utilities/api.jsx'

export default class Results extends React.Component {
  constructor (props) {
    super(props)

    // Set inital query
    var query = getUrlParam().query ? decodeURIComponent(getUrlParam().query) : ''

    // Set initial state
    this.state = {
      query: query,
      count: 5,
      done: false,
      result: []
    }

    search(query).then(res => {
      this.setState({
        result: res,
        done: true
      })
    })
  }

  render () {
    return (
      <div className="container-fluid">
      </div>
    )
  }
}
