import React from 'react'

// Components
import Search from '../Global/Search/Search.jsx'

// Images
import logo from '../../Images/logo.png'


export default class Hero extends React.Component {
  render () {
    return (
      <div className="landing-search">
        <div className="landing-search-squeeze">
          <div className="landing-search-squeeze-squeeze">
            <h1 className="color-brand"><img src={logo} height="40" style={{ marginBottom: 10 }} /></h1>
            <h1>Find and support veteran owned &amp; operated businesses</h1>
          </div>
          <Search size="lg" history={this.props.history} />
        </div>
      </div>
    )
  }
}
