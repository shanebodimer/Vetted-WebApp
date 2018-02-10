import React from 'react'

// Components
import SignupInfo from './SignupInfo.jsx'

export default class Signup extends React.Component {
  render () {
    return (
      <div className="overlay">
        <div className="auth-card">
          <div className="auth-card-header">
            <h4>Signup</h4>
            <i onClick={this.props.toggle} className="fal fa-2x fa-times"></i>
          </div>
          <div className="auth-card-body">
            <SignupInfo close={this.props.toggle} />
          </div>
        </div>
      </div>
    )
  }
}
