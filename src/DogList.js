import React from 'react';
import axios from 'axios';
import DogBreed from './DogBreed';

class DogList extends React.Component {
    constructor(props) { 
        super(props);
        this.state={ 
            dogBreeds:[]
        } 
    }
    
    componentDidMount() {
    // This code will be run immediately after the component is created.
    // Use Axios to load data from Dog API
        axios.get('https://dog.ceo/api/breeds/list/all')
          .then(response => {
            this.setState({ dogBreeds: Object.keys(response.data.message) });
          })
          .catch(error => {
            console.log(error);
          });
    }
    
    render() {
        return <ul className='breed-list'>{this.state.dogBreeds.map(db=><li key={db}><DogBreed dataFromParent = {db}/></li>)}</ul>;
    }
}



export default DogList;