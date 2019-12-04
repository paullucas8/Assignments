import React from 'react';
import axios from 'axios';

class ICForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        brand: '',
        model: '',
        engineDisplacement: '',
        topSpeed: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
        brand: event.target.brand,
        model: event.target.model,
        engineDisplacement: event.target.engineDisplacement,
        topSpeed: event.target.topSpeed
        
    });
  }

  handleSubmit(event) {
      axios.post('api/internalcombustion')
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
          Enter Brand of the Car:
          <input type="text" value={this.state.brand} onChange={this.handleChange} />
        </label>
        <label>
          Enter Model of the Car:
          <input type="text" value={this.state.model} onChange={this.handleChange} />
        </label>
        <label>
          Enter Engine Displacement of the Car:
          <input type="text" value={this.state.engineDisplacement} onChange={this.handleChange} />
        </label>
        <label>
          Enter Top Speed of the Car:
          <input type="text" value={this.state.topSpeed} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ICForm;