import React from 'react'

// Images
import logo from '../../../Images/logo.png'

export default class Footer extends React.Component {
  render () {
    return (
      <div className="cust-footer">
        <div className="container d-flex justify-content-between align-items-center">
        <img src={logo} height="30"/>
        
         <h5>&copy; 2018 | <span className="c-green">S&amp;T Shamhacks</span></h5>
        </div>
            
      </div>
    )
  }
}
