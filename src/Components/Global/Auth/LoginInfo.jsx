import React from 'react'
import { Input, FormGroup, FormText, FormFeedback } from 'reactstrap'

// Utilities
import { checkField } from '../../../Utilities/helpers.jsx'
import { login } from '../../../Utilities/auth.jsx'

export default class LoginInfo extends React.Component {
  constructor (props) {
    super(props)

    // Field values
    this.state = {
      email: '',
      password: '',
      emailValid: null,
      passValid: null
    }

    // Bind state updaters
    this.updateField = this.updateField.bind(this)
    this.submit = this.submit.bind(this)
  }

  updateField (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  submit (e) {
    // Prevent refresh
    e.preventDefault()

    // Check for valid fields
    var email = checkField(this.state.email, 'email')
    var password = checkField(this.state.password, 'notNull')

    // Update states
    this.setState({
      emailValid: email,
      passValid: password
    })

    // Submit if fields valid
    email && password
      ? login(this.state.email, this.state.password).then(res => {})
      : console.log('Form fails validation')
  }

  render () {
    return (
      <div>

        <form onSubmit={this.login}>

          {/* Email */}
          <FormGroup>
            <Input
              type="email"
              name="email"
              autoComplete="off"
              className="generic-input"
              onChange={this.updateField}
              value={this.state.email}
              placeholder={`Email address`}
              valid={this.state.emailValid}
            />
            <FormFeedback className="generic-form-text">Please enter a valid email address</FormFeedback>
          </FormGroup>

          {/* Password */}
          <FormGroup>
            <Input
              type="password"
              name="password"
              autoComplete="off"
              className="generic-input"
              onChange={this.updateField}
              value={this.state.password}
              placeholder={`Password`}
              valid={this.state.passValid}
            />
            <FormFeedback className="generic-form-text">This field cannot be blank</FormFeedback>
          </FormGroup>

          {/* Action */}
          <button onClick={this.submit} className="auth-btn primary-btn">
            <h5>Log in</h5>
          </button>

        </form>

        {/* Extras */}
        <center>
          <a className="auth-link" onClick={() => this.props.close('forgot')}>Forgot password?</a>
          <hr />
          <span className="f-19">Don't have an account? <a className="auth-link" onClick={() => this.props.close('signup')}>Sign up</a></span>
        </center>

      </div>
    )
  }
}
