import React from 'react'

// Comp
import Items from '../Landing/Items.jsx'

export default class NoResults extends React.Component {
  render () {
    return (  
     <div className="w-100">
        <center><br/><br/>
            <h1 className="c-red">No results found</h1>
            Check out these businesses instead:
<br /><br /><br /><br />
            <Items />
        </center>
     </div>
    )
  }
}
