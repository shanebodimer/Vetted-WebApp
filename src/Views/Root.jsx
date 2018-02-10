import React from 'react'

// Components
import Navigation from '../Components/Global/Navigation/Navigation.jsx'

// Root
// Main component that all other components will load with
// Components load in at: this.props.children
export default class Root extends React.Component {
  constructor (props) {
    super(props)

    console.log(props)
  }

  render () {
    return (
      <div>
        {/* <Navigation /> */}
        {this.props.children}
      </div>
    )
  }
}
