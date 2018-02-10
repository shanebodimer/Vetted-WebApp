import React from 'react'

// Components
import ForgotInfo from './ForgotInfo.jsx'

export default class Forgot extends React.Component {
  render () {
    return (
      <div className="overlay">
        <div className="auth-card">
          <div className="auth-card-header">
            <h4>Reset password</h4>
            <i onClick={this.props.toggle} className="fal fa-2x fa-times"></i>
          </div>
          <div className="auth-card-body">
            <span className="f-19">Enter the email address associated with your account, and we’ll email you a link to reset your password.</span>
            <br /><br />
            <ForgotInfo close={this.props.toggle} />
          </div>
        </div>
      </div>
    )
  }
}
