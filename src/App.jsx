import React from 'react'
import { Route, HashRouter } from 'react-router-dom'

// Root view
import Root from './Views/Root.jsx'

// Public views
import Landing from './Views/Landing.jsx'
import Search from './Views/Search.jsx'
import Business from './Views/Business.jsx'

import Navigation from './Components/Global/Navigation/Navigation.jsx'

// Auth views
// import Login from './Views/Auth/Login.jsx'
// import Forgot from './Views/Auth/Forgot.jsx'
// import Account from './Views/Auth/Account.jsx'

export default class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <Root>
          <Route render={props => <Navigation {...props}/>} />
          <Route exact path={'/'} render={props => <Landing {...props} />} />
          <Route exact path={'/business'} render={props => <Business {...props} />} />
          <Route path={'/search'} render={props => <Search {...props} />} />
        </Root>
      </HashRouter>
    )
  }
}
