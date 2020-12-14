import React, { Component } from 'react'

const baseURL = "http://localhost:3003";

export default class newPatientForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            phone: '',
            email: '',
            date: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        fetch(baseURL + "/patient", {
          method: "POST",
          body: JSON.stringify({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            phone: this.state.phone,
            email: this.state.email,
            date_created: this.state.date, 
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            this.props.handleAddPatient(data);
            this.setState({
              firstName: "",
              lastName: "",
              address: "",
              city: "",
              state: "",
              zip: "",
              phone: "",
              email: "",
              date: "",
            });
          });
      }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' id='firstName' name='firstName' onChange={this.handleChange} value={this.state.firstName} placeholder="Enter first name"></input>
                
                <label htmlFor='firstName'>Last Name</label>
                <input type='text' id='lastName' name='lastName' onChange={this.handleChange} value={this.state.lastName} placeholder="Enter last name"></input>

                <label htmlFor='address'>Address</label>
                <input type='text' id='address' name='address' onChange={this.handleChange} value={this.state.address} placeholder="Enter address"></input>

                <label htmlFor='city'>City</label>
                <input type='text' id='city' name='city' onChange={this.handleChange} value={this.state.city} placeholder="Enter city"></input>

                <label htmlFor='state'>State</label>
                <input type='text' id='state' name='state' onChange={this.handleChange} value={this.state.state} placeholder="Enter state"></input>

                <label htmlFor='zip'>Zip Code</label>
                <input type='number' id='zip' name='zip' onChange={this.handleChange} value={this.state.zip} placeholder="Enter zip"></input>

                <label htmlFor='phone'>Phone</label>
                <input type='number' id='phone' name='phone' onChange={this.handleChange} value={this.state.phone} placeholder="Enter phone"></input>

                <label htmlFor='email'>Email</label>
                <input type='text' id='email' name='email' onChange={this.handleChange} value={this.state.email} placeholder="Enter email"></input>

                <label htmlFor='date'>Date</label>
                <input type='date' id='date' name='date' onChange={this.handleChange} value={this.state.date} placeholder="Enter date"></input>
                <input type='submit' value='Add Patient'></input>

                </form>
            </div>
        )
    }
}
