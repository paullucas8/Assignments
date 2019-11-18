import React from 'react';

class DogBreed extends React.Component {
    render() {
        let someStyles = {borderStyle: 'solid', borderColor: 'lightblue', borderRadius: '5px', padding: '1rem' }; 
        return <h2 style={someStyles}>{this.props.dataFromParent}</h2>;
    }
}

export default DogBreed;