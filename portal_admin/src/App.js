import React, { Component } from 'react'

const baseURL = 'http://localhost:3003';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patients: []
    }
    this.getPatients = this.getPatients.bind(this);
  }

  componentDidMount() { // lifecycle method that runs when parent component mounts this component
    this.getPatients();
  }

  getPatients() {
    fetch(baseURL + '/patient')
    .then (data => {
      return data.json()
    }).then(parsedData => {
      this.setState({
        patients: parsedData
      })
    })
  }



  render() {
    return (
      <div>
        <h1>All Patients</h1>
        <table>
          <tbody>
            {
              this.state.patients.map(patient => {
                return (
                  <tr>
                    <td key = { patient._id}>{patient.firstName}</td>
                    <td key = { patient._id}>{patient.lastName}</td>
                    <td key = { patient._id}>{patient.address}</td>
                    <td key = { patient._id}>{patient.city}</td>
                    <td key = { patient._id}>{patient.state}</td>
                    <td key = { patient._id}>{patient.zip}</td>
                    <td key = { patient._id}>{patient.phone}</td>
                    <td key = { patient._id}>{patient.email}</td>
                    <td key = { patient._id}>{patient.date_created}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
