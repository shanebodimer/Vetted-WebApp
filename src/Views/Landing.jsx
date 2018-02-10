import React from 'react'

// Components
import Hero from '../Components/Landing/Hero.jsx'
import Items from '../Components/Landing/Items.jsx'

export default class Landing extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <Hero history={this.props.history} />
        <Items title={'Spots near you'} />
      </div>
    )
  }
}
