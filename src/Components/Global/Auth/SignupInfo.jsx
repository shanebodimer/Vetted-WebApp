import React from 'react'
import { Input, FormGroup, FormText, FormFeedback } from 'reactstrap'

// Utilities
import { checkField } from '../../../Utilities/helpers.jsx'
import { signup } from '../../../Utilities/auth.jsx'

export default class SignupInfo extends React.Component {
  constructor (props) {
    super(props)

    // Field values
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      nameValid: null,
      emailValid: null,
      passValid: null,
      confirmValid: null
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
    var name = checkField(this.state.name, 'notNull')
    var email = checkField(this.state.email, 'email')
    var password = checkField(this.state.password, 'password')
    var confirm = checkField(this.state.password, this.state.passwordConfirm)

    // Update states
    this.setState({
      nameValid: name,
      emailValid: email,
      passValid: password,
      confirmValid: confirm
    })

    // Submit if fields valid
    name && email && password && confirm
      ? signup(this.state.name, this.state.email, this.state.password).then(res => {})
      : console.log('Form fails validation')
  }

  render () {
    return (
      <div>

        <form onSubmit={this.login}>

          {/* Name */}
          <FormGroup>
            <Input
              type="text"
              name="name"
              autoComplete="off"
              className="generic-input"
              onChange={this.updateField}
              value={this.state.name}
              placeholder={`Your name`}
              valid={this.state.nameValid}
            />
            <FormFeedback className="generic-form-text">This field cannot be blank</FormFeedback>
          </FormGroup>

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
              placeholder={`Create a password`}
              valid={this.state.passValid}
            />
            <FormFeedback className="generic-form-text">Password must be atleast 7 charachters</FormFeedback>
          </FormGroup>

          {/* Confirm Password */}
          <FormGroup>
            <Input
              type="password"
              name="passwordConfirm"
              autoComplete="off"
              className="generic-input"
              onChange={this.updateField}
              value={this.state.passwordConfirm}
              placeholder={`Confirm password`}
              valid={this.state.confirmValid}
            />
            <FormFeedback className="generic-form-text">Passwords do not match</FormFeedback>
          </FormGroup>

          {/* Action */}
          <button onClick={this.submit} className="auth-btn primary-btn">
            <h5>Sign up</h5>
          </button>

        </form>

        {/* Extras */}
        <center>
          <hr />
          <span className="f-19">Already have a Carbnb account? <a className="auth-link" onClick={() => this.props.close('login')}>Login</a></span>
        </center>

      </div>
    )
  }
}
