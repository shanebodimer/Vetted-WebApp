import React from 'react'

// Components
import Filter from '../Components/Search/Filter.jsx'
import Results from '../Components/Search/Results.jsx'

export default class Search extends React.Component {
  render () {
    return (
      <div className="container-fluid search-container">
        <Filter />
        <Results />
      </div>
    )
  }
}
