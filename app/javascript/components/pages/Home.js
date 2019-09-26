import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom'
import { Jumbotron, Nav, NavItem, NavLink, Card, CardBody, CardText } from 'reactstrap'


class Home extends React.Component {
    render(){
        const {apartments} = this.props

    return (
      <React.Fragment>
        <h2>Apartments</h2>

        {apartments.map((apartment, index) => {
            return(
                <Card key={index}>
                    <CardBody>
                        <CardText>
                            {apartment.address}
                        </CardText>
                        <CardText>
                            {apartment.city}, {apartment.country} {apartment.zip}
                        </CardText>
                        <CardText>
                            Property Manager: {apartment.manager}
                        </CardText>
                    </CardBody>
                </Card>
            )}
        )}

      </React.Fragment>
    );
  }
}

export default Home
