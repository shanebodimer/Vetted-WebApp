import React from 'react'

// Components
import Filter from '../Components/Search/Filter.jsx'
import Results from '../Components/Search/Results.jsx'
import Footer from '../Components/Global/Footer/Footer.jsx'

export default class Search extends React.Component {
  render () {
    return (
      <div className="container-fluid search-container">
        <Filter />

        <Footer />
      </div>
    )
  }
}
