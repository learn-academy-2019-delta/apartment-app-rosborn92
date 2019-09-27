import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as  Router, Route, Link, Switch } from 'react-router-dom'
import { Jumbotron, Nav, NavItem, NavLink } from 'reactstrap'

import Home from './pages/Home'
import NewApartment from './pages/NewApartment'

class MainApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            apartments: []
        }
        this.getApartments()
    }

    getApartments = () => {
        fetch('/apartments')
        .then((resp) => {
            return resp.json()
        })
        .then((apartments) => {
            this.setState({apartments})
        })
    }

    createApartment = (attributes) => {
        return fetch('/apartments', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({apartment: attributes})
        })
        .then(response => {
            if(response.status === 201){
                this.getApartments()
            }
        })
    }

  render () {
      const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    const{ apartments } = this.state

    return (
      <React.Fragment>
        <Router>
            <Nav>
	            <NavItem>
	              <NavLink to="/" tag={Link}>Home</NavLink>
	            </NavItem>
	            <NavItem>
	              <NavLink to="/new-apartment" tag={Link}>New Apartment</NavLink>
	            </NavItem>

                {logged_in &&
                    <NavItem>
                        <NavLink href={sign_out_route} >Sign OUt</NavLink>
                    </NavItem>
                }
                {!logged_in &&
                    <NavItem>
                        <NavLink href={sign_in_route} >Sign In</NavLink>
                    </NavItem>
                }
	        </Nav>
            <Jumbotron>
                <h1>Welcome to Zip Apartments</h1>
            </Jumbotron>

            <Switch>
            <Route exact path="/"
                render={ (props) => {
                    return(
                        <Home
                            {...props}
                            // currentUserId = {current_user_id}
                            apartments={apartments}
                        />
                )
                }}
            />
            <Route path="/new-apartment"
                render={ (props) => {
                    return(
                        <NewApartment
                            {...props}
                            onClick={this.createApartment}
                        />
                    )
                }}
            />
            </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default MainApp
