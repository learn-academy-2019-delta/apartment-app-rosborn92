import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom'
import { Jumbotron, Nav, NavItem, NavLink } from 'reactstrap'


class Home extends React.Component {
    render(){
        const{apartments} = this.props

    return (
      <React.Fragment>
        <h2>Apartments</h2>
        <ul> {apartments.map((apartment, index) => {
            return(
                <li key={index}>
                    {apartment.address}
                    {apartment.city}
                    {apartment.zip}
                    {apartment.country}
                    {apartment.manager}
                </li>
            )
        })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Home
