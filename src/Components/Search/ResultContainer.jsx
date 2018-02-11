import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap'

import NoResults from './NoResults.jsx'

export default class ResultContainer extends React.Component {
  render () {
    return (
      <div>
        {(!this.props.items) && <NoResults />}

        <div className="row">
          {this.props.items && this.props.items.map((item, i) => (

            <div className={`col-md-${this.props.size}`} key={i}>
              <Card className="biz-listing">

                <CardBody>
                  <CardTitle>{item.DbaName ? item.DbaName : item.BusinessName }</CardTitle>
                  <CardSubtitle><b className="card-sub">{item.City}, {item.State}</b></CardSubtitle>
                  <br />
                  <CardText>{!item.Description && <i>No description found</i>}</CardText>
                  <Link to={`/business?id=${item.Duns}`}><button className="primary-btn biz-btn">Learn more</button></Link>
                  {item.Website && (
                    <a href={`${item.Website}`} target="blank"><button className="primary-btn biz-2nd-btn">Visit site</button></a>
                  )}
                </CardBody>
              </Card>

            </div>
          ))}
        </div>
      </div>
    )
  }
}
