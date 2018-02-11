import React from 'react'
import { Alert } from 'reactstrap'

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
          <br />
          <Alert color="primary" className="cust-alert">
            <h5><i className="fal fa-bell"></i> Check out our Chrome extension!</h5>
            <br />
            Search Vetted.com anywhere you go. This extension integrates relevant Vetted content next to your Google search results. <a href="https://chrome.google.com/webstore/category/extensions?hl=en" target="blank">Download now on the Chrome Web Store.</a>
          </Alert>
        </div>
      </div>
    )
  }
}
