import React from 'react'

// Utilities
import { updateRating } from '../../Utilities/api.jsx'

export default class Rate extends React.Component {
  constructor (props) {
    super(props)

    // Set initial state
    this.state = {
      rating: 0
    }

    this.updateField = this.updateField.bind(this)
    this.submit = this.submit.bind(this)
  }

  updateField (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  submit (e) {
    updateRating(this.state.rating, this.props.id).then(res => {
      this.setState({
        result: res[0],
        done: true
      })
      this.props.toggle()
    })
  }

  render () {
    console.log(this.props.id)
    return (
      <div className="overlay">
        <div className="auth-card">
          <div className="auth-card-header">
            <h4>Submit a rating</h4>
            <i onClick={this.props.toggle} className="fal fa-2x fa-times"></i>
          </div>
          <div className="auth-card-body">
            {/* <LoginInfo close={this.props.toggle} /> */}

            <center>
              <span className="star-rating star-5">
                <input onChange={this.updateField} type="radio" name="rating" value="1" /><i></i>
                <input onChange={this.updateField} type="radio" name="rating" value="2" /><i></i>
                <input onChange={this.updateField} type="radio" name="rating" value="3" /><i></i>
                <input onChange={this.updateField} type="radio" name="rating" value="4" /><i></i>
                <input onChange={this.updateField} type="radio" name="rating" value="5" /><i></i>
                <input onChange={this.updateField} type="radio" name="rating" value="6" /><i></i>
                <input onChange={this.updateField} type="radio" name="rating" value="7" /><i></i>
                <input onChange={this.updateField} type="radio" name="rating" value="8" /><i></i>
                <input onChange={this.updateField} type="radio" name="rating" value="9" /><i></i>
                <input onChange={this.updateField} type="radio" name="rating" value="10" /><i></i>
              </span>
            </center>

            <br />

            <center>
              <button onClick={this.submit} className="biz-btn primary-btn">
              Save rating
              </button>
            </center>
          </div>
        </div>
      </div>
    )
  }
}
