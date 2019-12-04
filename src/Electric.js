import React from 'react';
import axios from 'axios';

class Electric extends React.Component {
    constructor(props) { 
        super(props);
        this.state={ 
            Electric:[]
        } 
    }
    
    componentDidMount() {
    // This code will be run immediately after the component is created.
        axios.get('api/electric')
          .then(response => {
            this.setState({ Electric: Object.keys(response.data.message) });
            console.log(response.data.message);
          })
          .catch(error => {
            console.log(error);
          });
    }
    
    render() {
        return <ul className='car-list'>{this.state.Electric.map(db=><li key={db}>brand.{db}</li>)}</ul>;
    }
}



export default Electric;