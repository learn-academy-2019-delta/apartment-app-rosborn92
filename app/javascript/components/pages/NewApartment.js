import React from "react"
import PropTypes from "prop-types"
import { Redirect } from 'react-router-dom'
import { Jumbotron, Nav, NavItem, NavLink, Button, Label, Input, Form, FormGroup } from 'reactstrap'


class NewApartment extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                address: "",
                city: "",
                zip: "",
                country: "",
                manager: "",
                man_phone: "",
                hours: ""
            }
        }
    }

    onChange = (e) => {
        const {form} = this.state
        const { name, value } = e.target
        form[name] = value
        this.setState({form})
    }

    handleClick = () => {
        const { onClick } = this.props
        const { form } = this.state
        onClick(form)
        .then(() =>{
            this.setState({success: true})
        })
    }

    render(){
        const {
            address,
            city,
            zip,
            country,
            manager,
            man_phone,
            hours,
            success
        } = this.state

    return (
      <React.Fragment>
        { success && <Redirect to= "/" />}
        <h2>Create Apartment</h2>
        <Form>
            <FormGroup>
                <Label>Address</Label>
                <Input
                    name="address"
                    value={address}
                    onChange = {this.onChange}
                    type='text'
                />
            </FormGroup>
            <FormGroup>
                <Label>City</Label>
                <Input
                    name="city"
                    value={city}
                    onChange = {this.onChange}
                    type='text'
                />
            </FormGroup>
            <FormGroup>
                <Label>Zip Code</Label>
                <Input
                    name="zip"
                    value={zip}
                    onChange = {this.onChange}
                    type='text'
                />
            </FormGroup>
            <FormGroup>
                <Label>Country</Label>
                <Input
                    name="country"
                    value={country}
                    onChange = {this.onChange}
                    type='text'
                />
            </FormGroup>
            <FormGroup>
                <Label>Manager's Phone</Label>
                <Input
                    name="man_phone"
                    value={man_phone}
                    onChange = {this.onChange}
                    type='text'
                />
            </FormGroup>
            <FormGroup>
                <Label>Manager's Hours</Label>
                <Input
                    name="hours"
                    value={hours}
                    onChange = {this.onChange}
                    type='text'
                />
            </FormGroup>
        </Form>

        <Button onClick={this.handleClick}>Submit</Button>
      </React.Fragment>
    );
  }
}

export default NewApartment
