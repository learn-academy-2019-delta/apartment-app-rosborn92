import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom'
import { Jumbotron, Nav, NavItem, NavLink } from 'reactstrap'

import Home from './pages/Home'

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


            <Route exact path="/"
                render={ (...props) => {
                    return(
                    <Home
                        {...props}
                        // currentUserId = {current_user_id}
                        apartments={apartments}
                    />
                )
            }}
            />
        </Router>
      </React.Fragment>
    );
  }
}

export default MainApp
