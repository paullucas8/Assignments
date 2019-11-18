import React from 'react';
import axios from 'axios';

class RandomDog extends React.Component {
    constructor(props) { 
        super(props);
        this.state={ 
            imageURL: '',
        } 
    }
    
    componentDidMount() {
    // This code will be run immediately after the component is created.
    // Use Axios to load data from Dog API
        axios.get('https://dog.ceo/api/breeds/image/random')
          .then(response => {
            this.setState({ imageURL: response.data.message });
          })
          .catch(error => {
            console.log(error);
          });
    }
    
    render() {
        const { imageURL } = this.state;
        return (
            <img src={imageURL} />
        );
    }
}

export default RandomDog;