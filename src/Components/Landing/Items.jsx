import React from 'react'

// Components
import Skeleton from '../Global/Skeletons/Skeleton.jsx'
import ResultContainer from '../Search/ResultContainer.jsx'

// Utilities
import { searchHot, searchNear } from '../../Utilities/api.jsx'

export default class Items extends React.Component {
  constructor (props) {
    super(props)

    // Set initial state
    this.state = {
      done: false,
      result: [],
      resultNear: []
    }

    searchHot().then(res => {
      this.setState({
        result: res
      })
    })

    searchNear(localStorage.getItem('state')).then(res => {
      this.setState({
        resultNear: res,
        done: true
      })
    })
  }

  render () {
    return (
      <center>
        <div className="landing-hot-squeeze">
          {!this.state.done && (
            <div><Skeleton count={3} />
              <Skeleton count={3} />
              <Skeleton count={3} />
            </div>
          )}

          {this.state.done && (
            <div>
              <h3><span className="c-red"><i className="fas fa-chart-line"></i></span> Most popular</h3>
              <hr />
              <ResultContainer size={4} items={this.state.result} className={ this.state.done ? 'd-block' : 'd-none' }/>
            </div>
          )}
          <br /><br />
          {this.state.done && (
            <div>
              <h3><span className="c-red"><i className="far fa-map-marker"></i></span> Near you ({localStorage.getItem('state')})</h3>
              <hr />
              <ResultContainer size={4} items={this.state.resultNear} className={ this.state.done ? 'd-block' : 'd-none' }/>
            </div>
          )}
        </div>

        <br /><br />
      </center>
    )
  }
}
