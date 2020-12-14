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
        
      </div>
    )
  }
}
