import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap'

// Utilities
import { getUrlParam } from '../../../Utilities/helpers.jsx'
import { topCities } from '../../../Utilities/arrays.jsx'

export default class Search extends React.Component {
  constructor (props) {
    super(props)

    // Set inital query
    var query = getUrlParam().query ? decodeURIComponent(getUrlParam().query) : ''

    // Set initial state
    this.state = {
      query: query,
      suggestedCity: topCities
    }

    // Bind state operators
    this.updateField = this.updateField.bind(this)
    this.search = this.search.bind(this)
  }

  updateField (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  // Execute search
  search (e) {
    // Prevent refresh
    e.preventDefault()

    // Check if empty search
    var query = this.state.query ? this.state.query : ''

    // Relocate if query not empty
    query && this.props.history.push(`search?query=${encodeURIComponent(query)}`)
  }

  render () {
    // Randomly select a city to suggest
    var suggestedCity = this.state.suggestedCity[Math.floor(Math.random() * this.state.suggestedCity.length)]

    return (
      <form onSubmit={this.search}>
        <InputGroup className={`search-inputGroup-${this.props.size}`}>

          {/* Search icon */}
          <InputGroupAddon className="search-addon-l">
            <h5 className="search-addon-icon"><i className="fal fa-lg fa-search"></i></h5>
          </InputGroupAddon>

          {/* Input field */}
          <Input
            bsSize="lg"
            type="text"
            name="query"
            autoComplete="off"
            className="search-input"
            onChange={this.updateField}
            value={this.state.query}
            placeholder={`Try "${suggestedCity}"`}
          />

          {/* Search button */}
          <InputGroupAddon className="search-addon-r">
            <button onClick={this.search} className="search-btn primary-btn">
              <h5>Search</h5>
            </button>
          </InputGroupAddon>

        </InputGroup>
      </form>

    )
  }
}
