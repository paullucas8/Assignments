import React from 'react';
import axios from 'axios';

class InternalCombustion extends React.Component {
    constructor(props) { 
        super(props);
        this.state={ 
            internalCombustion:[]
        } 
    }
    
    componentDidMount() {
    // This code will be run immediately after the component is created.
        axios.get('api/internalcombustion')
          .then(response => {
            this.setState({ internalCombustion: Object.keys(response.data.message) });
            console.log(response.data.message);
          })
          .catch(error => {
            console.log(error);
          });
    }
    
    render() {
        return <ul className='car-list'>{this.state.internalCombustion.map(db=><li key={db}>brand.{db}</li>)}</ul>;
    }
}



export default InternalCombustion;