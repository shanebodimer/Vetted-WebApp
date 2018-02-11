import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Alert,
  Badge
} from 'reactstrap'
import Moment from 'react-moment'

import { getUrlParam } from '../../Utilities/helpers.jsx'
import { getBiz } from '../../Utilities/api.jsx'

import Rate from './Rate.jsx'

export default class Business extends React.Component {
  constructor (props) {
    super(props)

    // Set inital query
    var id = getUrlParam().id ? decodeURIComponent(getUrlParam().id) : ''

    // Set initial state
    this.state = {
      id: id,
      result: [],
      done: false,
      rating: false
    }

    getBiz(id).then(res => {
      this.setState({
        result: res[0],
        done: true
      })
    })

    this.modalRating = this.modalRating.bind(this)
  }

  // Login modal
  modalRating (e) {
    // Prevent scroll
    this.state.rating
      ? document.body.classList.remove('modal-open')
      : document.body.classList.add('modal-open')

    // Update state
    this.setState({
      rating: !this.state.rating
    })
  }

  render () {
    // Calculate rating
    var rating = Math.round(this.state.result.Rating / 2)
    var stars = ''
    for (var j = 0; j < rating; j++) {
      stars += '★'
    }

    document.title = this.state.result.BusinessName + ' | Vetted.com'

    return (

      <div className="border-top">
        {!this.state.result && <div className="full"> </div>}
        <div className="container">
          <br />

          <div className="biz-title">
            <h1>{this.state.result.BusinessName}</h1>
            {this.state.result.Website && (
              <a href={`https://${this.state.result.Website.slice(7)}`} target="blank"><button className="primary-btn biz-2nd-btn">Visit website</button></a>
            )}
          </div>

          <br />

          <div className="biz-title">
            <h4><i className="far fa-map-marker"></i> {this.state.result.City}, {this.state.result.State}</h4>
            <h4><i className="far fa-phone"></i> <a className="link" href={`tel:${this.state.result.Phone}`}>{this.state.result.Phone}</a></h4>
          </div>

          <br/>
          {this.state.result.DbaName && <h5>DBA name: {this.state.result.DbaName}</h5>}
          <h5>Company email: <a className="link" href={`mailto:${this.state.result.CompanyEmail}`}>{this.state.result.CompanyEmail}</a></h5>
          <h5>Verified VOSB: <Moment format="MMMM Do YYYY">{this.state.result.LastVerified}</Moment></h5>
          <h5>Rated: <span className="text-warning">{stars}</span></h5>
          <h6 className="link" onClick={this.modalRating}><i>Submit a rating?</i></h6>
          <br />

          <Alert color="secondary">
            <i className="fal fa-bars"></i>{' '}
            {!this.state.result.Description && 'No description found.'}
            {this.state.result.Description && this.state.result.Description}
          </Alert>

          <Alert color="primary">
            <i class="fal fa-comment-alt"></i>{' '}
            {!this.state.result.Status && 'No social status found.'}
            {this.state.result.Status && this.state.result.Status}
          </Alert>

          <br />
          <br />

          <center>
            {!this.state.result.ForProfit && <h3><Badge color="secondary">For profit</Badge></h3>}
            {this.state.result.ForProfit && <h3><Badge color="success">Not for profit</Badge></h3>}
          </center>

          <br />
          <br />

        </div>

        {this.state.rating && <Rate id={this.state.id} toggle={this.modalRating}/>}

      </div>
    )
  }
}
