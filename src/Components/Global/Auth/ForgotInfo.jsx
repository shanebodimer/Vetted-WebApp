import React from 'react'
import { Input, FormGroup, FormText, FormFeedback } from 'reactstrap'

// Utilities
import { checkField } from '../../../Utilities/helpers.jsx'
import { login } from '../../../Utilities/auth.jsx'

export default class ForgotInfo extends React.Component {
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

          {/* Action */}
          <button onClick={this.submit} className="auth-btn primary-btn">
            <h5>Send reset link</h5>
          </button>

        </form>

        {/* Extras */}
        <hr />
        <a className="f-19 auth-link" onClick={() => this.props.close('login')}><i className="far fa-chevron-left"></i> Back to Login</a>

      </div>
    )
  }
}
