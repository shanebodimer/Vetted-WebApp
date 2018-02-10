import React from 'react'

// Components
import LoginInfo from './LoginInfo.jsx'

export default class Login extends React.Component {
  render () {
    return (
      <div className="overlay">
        <div className="auth-card">
          <div className="auth-card-header">
            <h4>Login</h4>
            <i onClick={this.props.toggle} className="fal fa-2x fa-times"></i>
          </div>
          <div className="auth-card-body">
            <LoginInfo close={this.props.toggle} />
          </div>
        </div>
      </div>
    )
  }
}
