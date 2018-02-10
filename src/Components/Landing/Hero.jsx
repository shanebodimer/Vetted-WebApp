import React from 'react'

// Components
import Search from '../Global/Search/Search.jsx'

export default class Hero extends React.Component {
  render () {
    return (
      <div className="landing-search">
        <div className="landing-search-squeeze">
          <div className="landing-search-squeeze-squeeze">
            <h1 className="color-brand">Carbnb</h1>
            <h1>Reserve a great parking spot wherever you may go.</h1>
          </div>
          <Search size="lg" history={this.props.history} />
        </div>
      </div>
    )
  }
}
