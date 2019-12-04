import React from 'react';
import axios from 'axios';

class ElecticForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        brand: '',
        model: '',
        batteryCapacity: '',
        topSpeed: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
        brand: event.target.brand,
        model: event.target.model,
        batteryCapacity: event.target.batteryCapacity,
        topSpeed: event.target.topSpeed
        
    });
  }

  handleSubmit(event) {
      axios.post('api/electric')
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter Brand of Electric Car:
          <input type="text" value={this.state.brand} onChange={this.handleChange} />
        </label>
        <label>
          Enter Model of Electric Car:
          <input type="text" value={this.state.model} onChange={this.handleChange} />
        </label>
        <label>
          Enter Battery Capacity of Electric Car:
          <input type="text" value={this.state.batteryCapacity} onChange={this.handleChange} />
        </label>
        <label>
          Enter Top Speed of Electric Car:
          <input type="text" value={this.state.topSpeed} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ElecticForm;