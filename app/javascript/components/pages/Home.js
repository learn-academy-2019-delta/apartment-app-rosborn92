import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom'
import { Jumbotron, Nav, NavItem, NavLink, Card, CardBody, CardText, Row, Col } from 'reactstrap'


class Home extends React.Component {
    render(){
        const {apartments} = this.props

    return (
      <React.Fragment>
        <center><h2>Apartments</h2></center>


                <Row>
                {apartments.map((apartment, index) => {
                    return(
                <Col key={index} sm={{ size: 'auto', offset: 1 }} >
                <Card>
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
                </Col>

            )}
        )}
        </Row>

      </React.Fragment>
    );
  }
}

export default Home
