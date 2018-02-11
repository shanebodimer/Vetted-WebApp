import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Input,
  Button
} from 'reactstrap'

// Components
import Skeleton from '../Global/Skeletons/Skeleton.jsx'
import ResultContainer from './ResultContainer.jsx'

import SingleNavItem from '../Global/Navigation/SingleNavItem.jsx'

// Utilities
import { getUrlParam, modifyResults } from '../../Utilities/helpers.jsx'
import { search } from '../../Utilities/api.jsx'

export default class Navigation extends React.Component {
  constructor (props) {
    super(props)

    // Set inital query
    var query = getUrlParam().query ? decodeURIComponent(getUrlParam().query) : ''

    // Set inital state
    this.state = {
      query: query,
      state: 0,
      site: 0,
      rating: 0,
      popular: 0,
      show: 0
    }

    search(query).then(res => {
      this.setState({
        result: res,
        show: res,
        done: true
      })
    })

    this.updateField = this.updateField.bind(this)
  }

  updateField (e) {
    this.setState({ [e.target.name]: e.target.value, done: false })

    var newResults = modifyResults(this.state.show, e.target.name, e.target.value)

    this.setState({ show: newResults, done: true })
  }

  render () {
    return (
      <div>
        <div className="filter">

          <h5>Filter: </h5>

          <Input className="filter-select" type="select" name="state" onChange={this.updateField} value={this.state.state}>
            <option value="0">All states</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </Input>

          <Input className="filter-select" type="select" name="site" onChange={this.updateField} value={this.state.site}>
            <option value="0">Site/No-site</option>
            <option value="1">Has website</option>
            <option value="2">No website</option>
          </Input>

          <Input className="filter-select" type="select" name="rating" onChange={this.updateField} value={this.state.rating}>
            <option value="0">All ratings</option>
            <option value="9">★★★★★</option>
            <option value="7">★★★★+</option>
            <option value="5">★★★+</option>
            <option value="4">★★+</option>
            <option value="2">★+</option>
          </Input>

          <Input className="filter-select" type="select" name="popular" onChange={this.updateField} value={this.state.popular}>
            <option value="0">Most popular</option>
            <option value="1">Least popular</option>
          </Input>

          <Button outline color="secondary" size="sm" onClick={() => window.location.reload()} className="no-link">Reset all</Button>

          <h5>Results: <span className="color-brand">{this.state.show ? this.state.show.length : 0}</span></h5>

        </div>

        {!this.state.done && (
          <div>
            <Skeleton count={5} />
            <Skeleton count={5} classProp="d-none d-md-block d-lg-block d-xl-block" />
          </div>
        )
        }
        {this.state.done && (
          <ResultContainer size={4} items={this.state.show} className={this.state.done ? 'd-block' : 'd-none' }/>
        )}
      </div>
    )
  }
}
